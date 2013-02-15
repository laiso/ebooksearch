require.config({
  shim:{
  },

  paths:{
    hm:'vendor/hm',
    esprima:'vendor/esprima',
    store:'vendor/store.min',
    analytics:"https://www.google-analytics.com/ga",
    'jquery.multi-select':'vendor/jquery.multi-select',
    'jquery.quicksearch':'vendor/jquery.quicksearch'
  }
});

require(['app'], function (app) {
  // Load app
});