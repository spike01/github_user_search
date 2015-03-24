exports.config = {
  seleniumAddress: process.env.WDADDRESS || 'http://localhost:4444/wd/hub',
  specs: ['search-spec.js']
};