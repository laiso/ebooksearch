require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    garlic: 'vendor/garlic',
    'jquery.multi-select': 'vendor/jquery.multi-select',
    'jquery.quicksearch': 'vendor/jquery.quicksearch'
  }
});
 
require(['app'], function(app) {
  // Load app
});