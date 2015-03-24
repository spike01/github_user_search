exports.config = {
  seleniumAddress: connection_url(),
  specs: ['search-spec.js']
};

function connection_url() {
  if(process.env.SAUCE_USERNAME) {
    return "http://" + process.env.SAUCE_USERNAME + ":" + process.env.SAUCE_ACCESS_KEY + "@" + process.env.WDADDRESS
  } else {
    return "http://localhost:4444/wd/hub"
  }
}