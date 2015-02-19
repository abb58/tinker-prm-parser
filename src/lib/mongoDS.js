/**
 * Created by sph3r on 02/18/15.
 */

var mongodb = require('mongo');
var DsBase = require('./dsBase');

function MongoDS() {};

MongoDS.prototype = new DsBase;

MongoDS.prototype.save = function(collection, data) {

};

module.exports = MongoDS;