
(function($){
    $.fn.customSelect = function(opt){
        var params = {
            "classJs": (typeof opt.classJs !== "undefined") ? opt.classJs : "js-bk-select",
            "classCustomElem": (typeof opt.classCustomElem !== "undefined") ? opt.classCustomElem : "bk-select_custom",
            "classOptActive": (typeof opt.classOptActive !== "undefined") ? opt.classOptActive : "bk-select__active-option",
            "classOptList": (typeof opt.classOptList !== "undefined") ? opt.classOptList : "bk-select__option-list",
            "classOpt": (typeof opt.classOpt !== "undefined") ? opt.classOpt : "bk-select__option-item",
            "classElemActive": (typeof opt.classElemActive !== "undefined") ? opt.classElemActive : "active"
        };

        var optionArr = [],
            optionActive = this.find('option:selected'),
            newElemClass = this.removeClass(params.classJs).attr('class') + ' ' + params.classCustomElem,
            customElem = $('<div class="' + newElemClass + '"></div>'),
            customOptActive = $('<div class="' + params.classOptActive + '"></div>'),
            customOptList = $('<div class="' + params.classOptList + '"></div>'),
            customOption,
            iOptActive,
            activeStatus = false,
            select = this;

        if (this[0].selectedIndex === 0) {
          $(this[0].options[0]).attr('selected', 'selected');
        }

        this.hide();

        this.parent().append(customElem.append(customOptActive.html(optionActive.html())).append(customOptList));

        this.closeList = function() {
            customElem.removeClass(params.classElemActive);
            activeStatus = false;
        };

        this.createOptionLlist = function () {
            customOptList.empty();
            optionArr.length = 0;

            $(this).find('option').each(function() {
                optionArr.push($(this));
            });

            for (var i = 0; i < optionArr.length; i++) {
                if (optionArr[i].data('icon')) {
                    customOptList.append('<div class="' + params.classOpt + '"><div class="bk-item"><div class="bk-item__icon"><img src="' + optionArr[i].data('icon') + '"></img></div><div class="bk-item__txt bk-item__txt_r-5">' + optionArr[i].text() + '</div></div></div>'); //вместо img(src) было i(class)
                } else {
                    customOptList.append('<div class="' + params.classOpt + '">' + optionArr[i].text() + '</div>');
                }
            }

          // customOption = $('.' + params.classOpt);
            customOption = $(this).siblings('.' + params.classCustomElem).find('.' + params.classOpt);

            customOption.each(function() {
                if ($(this).text() === customOptActive.text()) {
                    // $(this).hide(); edited by npyrkina
                    iOptActive = $(this).index();
                }
            });

            customElem.find(customOption).on('click', function(e) {
                customElem.find(customOption).each(function() {
                    $(this).show();
                });
                $(this).hide();
                customOptActive.html($(this).html()); //было .text($(this).text());
                iOptActive = $(this).index();
                optionActive.removeAttr('selected');
                optionArr[iOptActive].attr('selected','selected');
                optionActive = optionArr[iOptActive];
                select.val(optionArr[iOptActive].val());
                select.change();
                select.closeList();

                return false;
            });

        };

        this.createOptionLlist();

        customOptActive.on('click', function(e) {
            if (!activeStatus) {
                customElem.addClass(params.classElemActive);
                activeStatus = true;
            } else {
                select.closeList();
            }
        });

        $(document).on('click', function(e) {
            if (!customOptList.is(e.target) && customElem.has(e.target).length === 0 && (activeStatus)) {
                select.closeList();
            }
        });

        this.on("DOMSubtreeModified", function (event) {
            select.createOptionLlist();
        });
    };
})(jQuery);

//# sourceMappingURL=custom-select.js.map
