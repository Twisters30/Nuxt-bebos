$(function () {
  $(document).ready( function () {
    $('.js-head-btn').on('click', function () {
      $('.js-menu-container').addClass('active');
      $('body').addClass('disable');
      $('.js-menu-btn').addClass('close');
    })
  });

  $(document).ready( function () {
    $('.js-menu-btn').on('click', function () {
      $('.js-menu-container').removeClass('active');
      $('body').removeClass('disable');
      $('.js-menu-btn').removeClass('close');
    })
  });

  $(document).mouseup(function (e) {
    var container = $(".js-menu-container");
    if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('active')) {
      container.removeClass('active');
      $('body').removeClass('disable');
      $('.js-menu-btn').removeClass('close');
    }
  });
});

//# sourceMappingURL=menu.js.map
