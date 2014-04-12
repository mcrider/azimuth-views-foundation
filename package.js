Package.describe({
    summary: "Azimuth CMS frontend templates (using Foundation 5.x)"
});

Package.on_use(function (api) {
  api.use(['less', 'templating', 'modernizr-meteor', 'zurb-foundation'], 'client');
  api.use(['azimuth-core'], 'client', {unordered: true});

  api.add_files([
    'css/style.less',
    'blocks/four_column/four_column.html',
    'blocks/six_column/six_column.html',
    'blocks/three_column/three_column.html',
    'blocks/twelve_column/twelve_column.html',
    'blocks/two_column/two_column.html',
    'pages/home_page/home_page.html',
    'pages/page_default/page_default.html',
    'pages/sidebar_left/sidebar_left.html',
    'pages/sidebar_right/sidebar_right.html',
    'views/404.html',
    'views/block_display.html',
    'views/footer.html',
    'views/header.html',
    'views/layout.html',
    'views/loading.html',
    'views/not_authorized.html',
    'views/accounts/account_buttons.html',
    'views/accounts/error.html',
    'views/accounts/forgot_password.html',
    'views/accounts/login.html',
    'views/accounts/sign_up.html',
    'views/accounts/social.html',
    'lib/utils.js'
  ], 'client');
});

