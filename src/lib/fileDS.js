/**
 * Created by sph3r on 02/18/15.
 */

var config = require('config');
var DsBase = require('./dsBase');
var fs = require('fs');

var UTF8 = { encoding: 'utf8' };

function FileDS() {}

FileDS.prototype = new DsBase;

FileDS.prototype.save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), UTF8);
};


module.exports = FileDS;