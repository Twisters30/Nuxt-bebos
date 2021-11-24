$(document).ready(function() {
  $(document).on('click', '.js-main-search-label', function (event) {
    event.preventDefault();

    var $this = $(this);

    // $this.closest('.main-search').addClass('active');

    if ($this.closest('.dialogs-mess__search')) {
      $this.closest('.dialogs-mess__search').addClass('active');
      $this.find('.js-main-search-input').focus();
    }
  });
  //
  // var bbMainMenuWidth = $('.js-beboss-main-menu').outerWidth();
  //
  //
  // $(document).on('mouseleave', '.js-beboss-main-menu', function (event) {
  //     event.preventDefault();
  //
  //     var $this = $(this);
  //
  //     if (!($this.hasClass('beboss-menu_input-focus')) && (bbMainMenuWidth < 100)) {
  //         $this.find('.main-search').removeClass('active');
  //     }
  // });
  //
  // $(document).on('mouseenter', '.js-beboss-main-menu', function (event) {
  //     event.preventDefault();
  //
  //     var $this = $(this);
  //
  //     if ($this.find('.js-main-search-input').hasClass('active')) {
  //         $this.find('.main-search').addClass('active');
  //     }
  // });
  //
  // $(document).on('blur', '.js-main-search-input', function (event) {
  //     event.preventDefault();
  //
  //     var $this = $(this);
  //
  //     if (!($this.closest('.dialogs').length)) {
  //         if ((bbMainMenuWidth < 100) && ($('html').hasClass('no-touchevents'))) {
  //             $this.closest('.main-search').removeClass('active');
  //         }
  //     }
  // });
  //
  $(document).on('click', '', function (event) {
    if (!$(event.target).closest('.js-main-search-label').length) {
      if (!$('.js-main-search-input').hasClass('active')) {
        // $('.main-search').removeClass('active');
        $('.dialogs-mess__search').removeClass('active');
      }
    }
  });
  //
  // $(window).on('load resize orientationchange', function () {
  //     bbMainMenuWidth = $('.js-beboss-main-menu').outerWidth();
  // });
});
$(document).ready(function() {

  function bmc() {
    function t() {
      var t = window.pageYOffset - n;
      (n = window.pageYOffset) < a ? e.addClass("bmc_visible") : Math.abs(t) >= d && e.toggleClass("bmc_visible", t < 0)
    }
    var e = $('.js-bmc')
      , n = window.pageYOffset
      , d = 15
      , a = 150;
    $(document).on('click', '.js-bmc', function(event) {
      if ($(event.target).closest(".js-bmc-btn").length) return;
      $(this).toggleClass('active');
      $(this).addClass('bmc_visible');
      event.stopPropagation();
    });
    $(document).on('scroll', function() {
      if (e.hasClass('active')) {
        e.removeClass('active');
      } else {
        t();
      }
    });
  }
  bmc();

  function ddbLaunchScroll() {
    baron({
      root: '.js-bh-ddb-scroll-root',
      scroller: '.js-bh-ddb-scroller',
      bar: '.js-bh-ddb-scrollbar',
      scrollingCls: '_scrolling',
      draggingCls: '_dragging'
    });
  }
  ddbLaunchScroll();


  function dropDownBlocks () {
    var $this,
      status = false;
    $('.js-bh-bo').on('click', function(event) {
      if (!status) {
        $this = $(this);
        $this.addClass('active');
        status = true;
      } else {
        if (!$(event.target).closest(".js-bh-ddb").length) {
          $this.removeClass('active');
          status = false;
        }
      }
    });

    $('.js-bh-ddb-scroller').each(function (i, v) {
      offScrollUnderBlock($(v));
    });
  }
  dropDownBlocks ();


  $('.js-main-search-input').on('blur input', function(){
    var q = $(this).val();
    if (q.length > 0) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  });

  function bebossMenu() {
    baron({
      root: '.js-beboss-main-menu',
      scroller: '.js-beboss-main-menu-container',
      bar: '.js-beboss-main-menu-scrollbar',
      scrollingCls: '_scrolling',
      draggingCls: '_dragging'
    });

    var $menu = $('.js-beboss-main-menu'),
      $burger = $('.js-beboss-burger'),
      $searchInput = $menu.find($('.js-main-search-input'));

    $burger.on('click', function(){
      $(this).add($menu).toggleClass('active');
    });

    $menu.on('click', function(e) {
      if (!$('html').hasClass('no-touchevents') && !$menu.hasClass('active')) {
        e.preventDefault();
        $burger.click();
      }
    });

    $(document).on('touchstart', function(event) {
      if ($menu.hasClass('active')) {
        if ($(event.target).closest($menu.add($burger).add($('.mfp-wrap'))).length) return;
        $burger.click();
        event.stopPropagation();
      }
    });

    $searchInput.on('focus', function(){
      $menu.addClass('beboss-menu_input-focus')
    });
    $searchInput.on('blur', function(){
      $menu.removeClass('beboss-menu_input-focus')
    });

    /*off scroll under menu*/
    offScrollUnderBlock($('.js-beboss-main-menu-container'));
  }
  bebossMenu();

  /*off scroll under block*/
  function offScrollUnderBlock(_overlay) {
    var _clientY = null;
    _overlay.on('touchstart', function (event) {
      if (event.originalEvent.touches.length === 1) {
        _clientY = event.originalEvent.touches[0].clientY;
      }
    });

    _overlay.on('touchmove', function (event) {
      if (event.originalEvent.touches.length === 1) {
        disableRubberBand(event);
      }

    });
    _overlay.on('mousewheel', function(event) {
      if (parseInt(event.originalEvent.wheelDelta || -event.originalEvent.deltaY) >=0) {
        if (_overlay[0].scrollTop === 0) {
          event.preventDefault();
        }
      } else {
        if (isOverlayTotallyScrolled()) {
          event.preventDefault();
        }
      }
    });

    function disableRubberBand(event) {
      var clientY = event.originalEvent.touches[0].clientY - _clientY;
      if (_overlay[0].scrollTop === 0 && clientY > 0) {
        event.preventDefault();
      }
      if (isOverlayTotallyScrolled() && clientY < 0) {
        event.preventDefault();
      }
    }

    function isOverlayTotallyScrolled() {
      return _overlay[0].scrollHeight - _overlay[0].scrollTop <= _overlay[0].clientHeight;
    }
  }

  /*for .bm-profile__name*/
  // function textCutInit($elem) {
  //   var txtFull = $elem.text(),
  //     height,
  //     txt,
  //     length,
  //     parentHeight;
  //   $(window).on('load', function() {
  //     $elem.text(txtFull);
  //     height = $elem.height(),
  //       txt = $elem.text(),
  //       length = txt.length,
  //       parentHeight = parseInt($elem.parent().css('max-height'), 10);
  //
  //     if (parentHeight === 'Nan') {
  //       return false;
  //     }
  //     if (parentHeight < height) {
  //       while (parentHeight < height) {
  //         txt = txt.slice(0, length);
  //         $elem.text(txt+'...');
  //         length--;
  //         height = $elem.height();
  //       }
  //     }
  //   });
  // }
  // textCutInit($('.js-bm-profile__name'));

  // $('.js-city-selection').magnificPopup({
  //   type: 'inline',
  //   preloader: false,
  //   modal: true,
  //   fixedBgPos: true,
  //   fixedContentPos: true,
  //   enableEscapeKey: true
  //   // callbacks: {
  //   //     open: function () {
  //   //         $('.js-beboss-main-menu').addClass('beboss-menu_input-focus')
  //   //     }
  //   // }
  // });

  // $('.js-modal-city-selection__btn-close').on('click', function(e) {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // });
});



$(function () {

  $(document).on('change', '.pay-cards__radio', function (e) {
    e.preventDefault();
    $('.js-total_sum').html($(this).closest('.pay-cards__label').find('.pay-cards__price').html());
    $('.js-add_project').removeAttr('disabled');
  })

}());
