const settings = require('../settings/core');
const request = require('request');

module.exports = {
  get: function(url, callback) {
    request.get(`${settings.api_url}/wp-json/wc/v2/${url}`, {
      oauth:{
        consumer_key: settings.consumer_key,
        consumer_secret: settings.consumer_secret,
      },
      qs:{user_id:'...'}
    }, callback)
  }
}
