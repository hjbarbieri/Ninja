exports.config = {
  allScriptsTimeout: 11000,

  
  
  specs: [
    '*.js'
  ],


  capabilities: {

    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:5000',

  

  jasmineNodeOpts: {
    onComplete: null,
      // If true, display spec names.
      isVerbose: true,
      // If true, print colors to the terminal.
      showColors: true,
      // If true, include stack traces in failures.
      includeStackTrace: true,
      // Default time to wait in ms before a test fails.
      defaultTimeoutInterval: 660000
  },


  framework: 'jasmine2'

};




