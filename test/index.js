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

    it('validate number', function() {
        var number;

        number = phone_util.parse('23907','GB');
        phone_util.isValidNumber(number).should.equal(false);

        number = phone_util.parse('53453455','GB');
        phone_util.isValidNumber(number).should.equal(false);

        number = phone_util.parse('8453136666','GB');
        phone_util.isValidNumber(number).should.equal(true);
    });

    it('format in RFC3966', function(){
        var number = phone_util.parse('7239048346','TR');
        phone_util.format(number, phone.PhoneNumberFormat.RFC3966).should.equal('tel:+90-7239048346');
    });

    it('format in E164', function(){
        var number = phone_util.parse('5070000000','TR');
        phone_util.format(number, phone.PhoneNumberFormat.E164).should.equal('+905070000000');
    });

    it('format to national', function(){
        var number = phone_util.parse('+90 507 000 0000');
        phone_util.format(number, phone.PhoneNumberFormat.NATIONAL).should.equal('0507 000 0000');
    });
});
