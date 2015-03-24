exports.config = {
  specs: ['search-spec.js'],
  capabilities: {
     'browserName': 'chrome'
  },
  allScriptsTimeout: 30000,
  rootElement: 'html',
  baseUrl: 'http://localhost:3000/'
};
