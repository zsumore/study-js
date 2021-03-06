module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      //'app/bower_components/angular-route/angular-route.js',
      //'app/bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js'
     //'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    //browsers : ['Chrome','PhantomJS'],
    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
