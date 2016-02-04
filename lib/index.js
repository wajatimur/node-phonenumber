var path = require('path');
var closureBasePath = path.join(__dirname, 'closure/closure/goog/');
var goog = require('closure').Closure({CLOSURE_BASE_PATH: closureBasePath});
var phonenumberBasePath = path.join(__dirname, 'libphonenumber/javascript/');

goog.require('goog.array');
goog.require('goog.proto2.PbLiteSerializer');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.json');

goog.loadScript(path.join(phonenumberBasePath, 'i18n/phonenumbers/phonemetadata.pb.js'));
goog.loadScript(path.join(phonenumberBasePath, 'i18n/phonenumbers/phonenumber.pb.js'));
goog.loadScript(path.join(phonenumberBasePath, 'i18n/phonenumbers/metadata.js'));
goog.loadScript(path.join(phonenumberBasePath, 'i18n/phonenumbers/phonenumberutil.js'));

module.exports = goog.global.i18n.phonenumbers;
