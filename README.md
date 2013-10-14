# libphonenumber

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
```

## Author & Credits
* Original Author - https://github.com/mattbornski