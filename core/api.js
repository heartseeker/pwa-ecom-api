const settings = require('../settings/core');
const request = require('request');

module.exports = {
  get: function(url, callback) {
    request.get(`${settings.api_url}/wp-json/wc/v2/${url}`, {
      auth:{
        user: settings.consumer_key,
        pass: settings.consumer_secret,
        sendImmediately: true
      },
      qs:{user_id:'...'}
    }, callback)
  }
}
