exports.config = {
  specs: ['search-spec.js'],
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY
};

// function connection_url() {
//   if(process.env.SAUCE_USERNAME) {
//     return "http://" + process.env.SAUCE_USERNAME + ":" + process.env.SAUCE_ACCESS_KEY + "@" + process.env.WDADDRESS
//   } else {
//     return "http://localhost:4444/wd/hub"
//   }
// }