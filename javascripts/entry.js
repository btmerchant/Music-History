require.config({
    baseUrl: './javascripts',

    paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
      "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
      'firebase': "../lib/bower_components/firebase/firebase",
      'lodash': "../lib/bower_components/lodash/lodash.min",
      'material': "../lib/bower_components/bootstrap-material-design/dist/js/material.min"
    },
    shim : {
    "bootstrap" : { "deps" :['jquery']},
    'material': ['bootstrap'],
    'firebase' : {exports: 'Firebase'}
    }
});

require(["main", "bootstrap"],function() {});
