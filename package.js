Package.describe({
  name: 'seakaytee:flow-db-admin',
  version: '1.2.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor Database Admin package for use with Flow Router',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cpravetz/flow-db-admin',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  both = ['client','server']

  api.use(
    [
    'coffeescript',
    'underscore',
    'reactive-var',
    'meteorhacks:unblock',
    'seakaytee:flow-routing-extra',
    'kadira:blaze-layout',
    'zimme:active-route',
    'reywood:publish-composite',
    'aldeed:collection2',
    'aldeed:autoform',
    'aldeed:template-extension',
    'alanning:roles',
    'raix:handlebar-helpers',
    'momentjs:moment',
    'aldeed:tabular',
    'mfactory:admin-lte',
	'tmeasday:check-npm-versions',
    'check',
	'ecmascript'
    ],
    both);

  api.use(['less','session','jquery','templating'],'client')

  api.use(['email'],'server')

  api.add_files([
    'lib/both/AdminDashboard.coffee',
    'lib/both/routes.js',
    'lib/both/utils.coffee',
    'lib/both/startup.coffee',
    'lib/both/collections.coffee'
    ], both);

  api.add_files([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/fadmin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/autoForm.coffee',
    'lib/client/css/admin-custom.less'
    ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');

  //api.addAssets(['lib/client/css/admin-custom.css'],'client');
  api.export('AdminDashboard',both)

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('seakaytee:flow-db-admin');
  api.addFiles('flow-db-admin-tests.js');
});
