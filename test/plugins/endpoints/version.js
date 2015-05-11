/* eslint no-unused-expressions: 0 */

'use strict';

var Chai = require('chai');
var Lab = require('lab');
var Mongoose = require('mongoose');
var Server = require('../../lib/server');

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Chai.expect;
var it = lab.test;

describe('authentication.js', function(){
  it('should have a empty token', function(done){
    server.plugins.authentication.authenticate.validateFunc({}, function(authErr, isAuth, credentials){
      expect(authErr).to.not.be.ok;
      expect(isAuth).to.not.be.ok;
      expect(credentials).to.not.be.ok;
      done();
    });
  });
});
