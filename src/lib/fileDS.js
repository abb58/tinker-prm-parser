/**
 * Created by sph3r on 02/18/15.
 */

var config = require('config');
var DsBase = require('./dsBase');

function FileDS() {}

FileDS.prototype = new DsBase;




module.exports = FileDS;