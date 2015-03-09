# node-phonenumber [![Build Status](https://travis-ci.org/wajatimur/node-phonenumber.png?branch=master)](https://travis-ci.org/wajatimur/node-phonenumber)

NodeJS port of Google's libPhoneNumber

## Installation

### Installing node-phonenumber
```
npm install node-phonenumber
```

## Example Usage
```javascript
var phone = require('node-phonenumber')

var phoneUtil = phone.PhoneNumberUtil.getInstance();
var phoneNumber = phoneUtil.parse('0139348815','MY');
var toNumber = phoneUtil.format(phoneNumber, phone.PhoneNumberFormat.INTERNATIONAL);

console.log(toNumber);

$ +60 13-934 8815
```

## Author & Credits
* Original Author - https://github.com/mattbornski

## License
Copyright 2013 Azri Jamil

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
