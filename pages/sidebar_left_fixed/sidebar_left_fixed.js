Template.sidebar_left_fixed.rendered = function() {
  var $sidebar   = $("#toc"),
  $window    = $(window),
  offset     = $sidebar.offset(),
  topPadding = 100;

  $window.scroll(function() {
    if ($window.scrollTop() > offset.top && $window.width() > 700) {
      $sidebar.stop().animate({
        marginTop: $window.scrollTop() - offset.top + topPadding
      });
    } else if ($window.width() > 700) {
      $sidebar.stop().animate({
        marginTop: 50
      });
    }
  });
}