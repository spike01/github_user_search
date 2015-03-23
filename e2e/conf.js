exports.config = {
  seleniumAddress: 'http://localhost:' + process.env.WDPORT +  '/wd/hub' || 'http://localhost:4444/wd/hub',
  specs: ['search-spec.js']
};