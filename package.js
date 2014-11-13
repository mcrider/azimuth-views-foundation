Package.describe({
  name: 'mcrider:azimuth-views-foundation',
  summary: 'Azimuth CMS frontend templates (using Foundation 5.x)',
  version: '0.3.7',
  git: 'https://github.com/mcrider/azimuth-views-foundation'
});

Package.onUse(function (api) {
  api.use(['less', 'templating', 'mrt:modernizr-meteor', 'jquery'], 'client');
  api.use('mcrider:azimuth-core', {unordered: true});

  api.add_files('lib/foundation/css/normalize.css', 'client');
  api.add_files('lib/foundation/css/foundation.css', 'client');
  api.add_files('lib/foundation/js/foundation.js', 'client');
  api.add_files('lib/foundation/js/foundation.abide.js', 'client');
  api.add_files('lib/foundation/js/foundation.accordion.js', 'client');
  api.add_files('lib/foundation/js/foundation.alert.js', 'client');
  api.add_files('lib/foundation/js/foundation.clearing.js', 'client');
  api.add_files('lib/foundation/js/foundation.dropdown.js', 'client');
  api.add_files('lib/foundation/js/foundation.interchange.js', 'client');
  api.add_files('lib/foundation/js/foundation.joyride.js', 'client');
  api.add_files('lib/foundation/js/foundation.magellan.js', 'client');
  api.add_files('lib/foundation/js/foundation.offcanvas.js', 'client');
  api.add_files('lib/foundation/js/foundation.orbit.js', 'client');
  api.add_files('lib/foundation/js/foundation.reveal.js', 'client');
  api.add_files('lib/foundation/js/foundation.tab.js', 'client');
  api.add_files('lib/foundation/js/foundation.tooltip.js', 'client');
  api.add_files('lib/foundation/js/foundation.topbar.js', 'client');
  api.add_files('css/style.less', 'client');
  api.add_files('blocks/four_column/four_column.html', 'client');
  api.add_files('blocks/six_column/six_column.html', 'client');
  api.add_files('blocks/three_column/three_column.html', 'client');
  api.add_files('blocks/twelve_column/twelve_column.html', 'client');
  api.add_files('blocks/two_column/two_column.html', 'client');
  api.add_files('pages/home_page/home_page.html', 'client');
  api.add_files('pages/page_default/page_default.html', 'client');
  api.add_files('pages/sidebar_left/sidebar_left.html', 'client');
  api.add_files('pages/sidebar_right/sidebar_right.html', 'client');
  api.add_files('views/404.html', 'client');
  api.add_files('views/block_display.html', 'client');
  api.add_files('views/footer.html', 'client');
  api.add_files('views/header.html', 'client');
  api.add_files('views/layout.html', 'client');
  api.add_files('views/not_authorized.html', 'client');
  api.add_files('views/accounts/account_buttons.html', 'client');
  api.add_files('views/accounts/error.html', 'client');
  api.add_files('views/accounts/forgot_password.html', 'client');
  api.add_files('views/accounts/login.html', 'client');
  api.add_files('views/accounts/sign_up.html', 'client');
  api.add_files('views/accounts/social.html', 'client');
  api.add_files('lib/utils.js', 'client');
});