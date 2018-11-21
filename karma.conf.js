//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.6.7/angular.min.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.6.7/angular-route.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.6.7/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    reporters: ['progress', 'coverage', 'junit'],
    preprocessors: {
      'app/**/*_test.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage' // required for coverage
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
