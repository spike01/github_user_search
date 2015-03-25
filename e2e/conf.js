exports.config = {
  specs: ['search-spec.js'],
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  sauceSeleniumAddress: 'localhost:4445/wd/hub',
  capabilities: {
     'browserName': 'chrome'
  },
  allScriptsTimeout: 30000,
  rootElement: 'html',
  baseUrl: 'http://localhost:3000/'
};
