// Generated by CoffeeScript 1.9.1
(function() {
  $(document).ready(function() {
    var $activates, $nav, $navBtn, animationFinished;
    animationFinished = false;
    $nav = $(".nav");
    $navBtn = $(".nav-btn");
    $activates = $(".nav, .nav-btn, .nav-item-menu, .nav-item-submenu");
    $navBtn.on('mouseenter', function() {
      if (!$nav.hasClass('active')) {
        return $activates.addClass('active');
      }
    });
    $("#nav").on('mouseleave', function() {
      if (animationFinished) {
        return $activates.removeClass('active');
      }
    });
    return $nav.on('oTransitionEnd msTransitionEnd transitionend webkitTransitionEnd', function() {
      if ($nav.hasClass('active')) {
        return animationFinished = true;
      } else {
        return animationFinished = false;
      }
    });
  });

}).call(this);

//# sourceMappingURL=navbar.js.map