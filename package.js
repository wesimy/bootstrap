// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'wesimy:rtlbootstrap',  // https://atmospherejs.com/twbs/bootstrap
  summary: 'RTL Bootstrap 4',
  version: '4.0.0-alpha.6',
  git: 'https://github.com/wesimy/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
