# node-phonenumber [![Build Status](https://travis-ci.org/wajatimur/node-phonenumber.png?branch=master)](https://travis-ci.org/wajatimur/node-phonenumber)

[![NPM](https://nodei.co/npm/node-phonenumber.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-phonenumber/)

NodeJS port of Google's libPhoneNumber

## Installation

    npm install node-phonenumber --save

## Example Usage
```javascript
var phone = require('node-phonenumber')

var phoneUtil = phone.PhoneNumberUtil.getInstance();
var phoneNumber = phoneUtil.parse('0139348815','MY');
var toNumber = phoneUtil.format(phoneNumber, phone.PhoneNumberFormat.INTERNATIONAL);

console.log(toNumber);

$ +60 13-934 8815
```

## Testing

    npm test

Test will be run to verify the phone number format of MY country, test for another
countries are welcome. Please see the test file in `test\index.js` and insert below
code as example.

    it('parse XX phone number format', function(){
        var phone_xx = phone_util.parse('012345678','XX');
        phone_util.format(phone_xx, phone.PhoneNumberFormat.INTERNATIONAL).should.equal('+10 12345678');
    });

## Author & Credits
* Original Author - https://github.com/mattbornski

## License
Copyright(c) 2013-2016 Azri Jamil

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
