exports.config = {
  specs: ['search-spec.js'],
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  sauceSeleniumAddress: 'localhost:4445/wd/hub',
  capabilities: {
     'browserName': 'chrome'
  },
  allScriptsTimeout: 30000,
  rootElement: 'html'
};

// function connection_url() {
//   if(process.env.SAUCE_USERNAME) {
//     return "http://" + process.env.SAUCE_USERNAME + ":" + process.env.SAUCE_ACCESS_KEY + "@" + process.env.WDADDRESS
//   } else {
//     return "http://localhost:4444/wd/hub"
//   }
// }



 // // Spec patterns are relative to the current working directly when
 // // protractor is called.
 // specs: ['example_spec.js'],

 // // Options to be passed to Jasmine-node.
 // jasmineNodeOpts: {
 //   showColors: true,
 //   defaultTimeoutInterval: 30000
 // }