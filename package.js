Package.describe({
    summary: "Azimuth CMS frontend templates (using Foundation 4.x)"
});

Package.on_use(function (api) {
  api.use(['less', 'templating', 'modernizr-meteor'], 'client');
  api.use(['azimuth-core'], 'client', {unordered: true});

  api.add_files([
    'lib/foundation/css/foundation.css',
    'lib/foundation/js/foundation.js',
    'lib/foundation/js/foundation.abide.js',
    'lib/foundation/js/foundation.alerts.js',
    'lib/foundation/js/foundation.clearing.js',
    'lib/foundation/js/foundation.cookie.js',
    'lib/foundation/js/foundation.dropdown.js',
    'lib/foundation/js/foundation.forms.js',
    'lib/foundation/js/foundation.interchange.js',
    'lib/foundation/js/foundation.joyride.js',
    'lib/foundation/js/foundation.magellan.js',
    'lib/foundation/js/foundation.orbit.js',
    'lib/foundation/js/foundation.placeholder.js',
    'lib/foundation/js/foundation.reveal.js',
    'lib/foundation/js/foundation.section.js',
    'lib/foundation/js/foundation.tooltips.js',
    'lib/foundation/js/foundation.topbar.js',

    'css/style.less',
    'blocks/four_column/four_column.html',
    'blocks/six_column/six_column.html',
    'blocks/three_column/three_column.html',
    'blocks/twelve_column/twelve_column.html',
    'blocks/two_column/two_column.html',
    'blocks/row_separator/row_separator.html',
    'pages/home_page/home_page.html',
    'pages/page_default/page_default.html',
    'pages/sidebar_left/sidebar_left.html',
    'pages/sidebar_left_fixed/sidebar_left_fixed.html',
    'pages/sidebar_left_fixed/sidebar_left_fixed.css',
    'pages/sidebar_left_fixed/sidebar_left_fixed.js',
    'pages/sidebar_right/sidebar_right.html',
    'views/layout.html',
    'views/404.html',
    'views/loading.html',
    'views/not_authorized.html',
    'views/accounts/account_buttons.html',
    'views/accounts/error.html',
    'views/accounts/forgot_password.html',
    'views/accounts/login.html',
    'views/accounts/sign_up.html',
    'views/accounts/social.html',
    'views/block_display.html',
    'views/footer.html',
    'views/header.html',
    'lib/utils.js'
  ], 'client');
});

