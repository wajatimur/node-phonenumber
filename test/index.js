var should = require('chai').should(),
    phone = require('../lib/index.js'),
    phone_util = phone.PhoneNumberUtil.getInstance();

describe('#format', function(){

    it('parse MY phone number format', function(){
        var phone_my = phone_util.parse('0139348815','MY');
        phone_util.format(phone_my, phone.PhoneNumberFormat.INTERNATIONAL).should.equal('+60 13-934 8815');
    });

});
