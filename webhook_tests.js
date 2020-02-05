var assert = require('assert');
var helper = require('./webhook_functions.js')
var push1body = require('./mocks/webhooks/push_1')

describe('Webhook functions', function() {
  describe('get_sha', function() {
    it('should return sha of the commit', function() {
      var req = {
        body: push1body
      } 
      assert.equal(helper.get_sha(req), '91ee4c1869a73d86e2004942c6447412794c99ea');
    });
  });
});