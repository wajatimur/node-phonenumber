var should = require('chai').should(),
    phone = require('../lib/index.js'),
    phone_util = phone.PhoneNumberUtil.getInstance();

describe('#format', function(){

    it('parse MY phone number format', function(){
        var number = phone_util.parse('0139348815','MY');
        phone_util.format(number, phone.PhoneNumberFormat.INTERNATIONAL).should.equal('+60 13-934 8815');
    });

    it('parse UK phone number format', function(){
        var number = phone_util.parse('0845 313 66 66','GB');
        phone_util.format(number, phone.PhoneNumberFormat.INTERNATIONAL).should.equal('+44 845 313 6666');
    });

    it('parse an international phone number', function(){
        var number = phone_util.parse('0012422342353','GB');
        phone_util.format(number, phone.PhoneNumberFormat.INTERNATIONAL).should.equal('+1 242-234-2353');
    });

});
