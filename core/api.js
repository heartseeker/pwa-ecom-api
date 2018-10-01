const settings = require('../settings/core');
const request = require('request');

module.exports = {
  get: function(url, callback) {
    request.get(`${settings.api_url}/wp-json/wc/v2/${url}`, {
      'auth': {
        'user': 'ck_901a2d8d8f110651e91321d70bb0ba9c219997d0',
        'pass': 'cs_284dbd5f36bf1264c96fd8e0e11bee2ad0702aeb',
        'sendImmediately': false
      }
    })
  }
}
