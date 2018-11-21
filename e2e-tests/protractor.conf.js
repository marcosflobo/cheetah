//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*-spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'browserVersion': '65'
  },

  baseUrl: 'http://localhost:8000',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
