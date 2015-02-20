/**
 * Created by sph3r on 02/18/15.
 */

var config = require('config');
var DsBase = require('./dsBase');
var fs = require('fs');
var path = require('path');
var LOG = require('./logger');

var UTF8 = { encoding: 'utf8' };

function FileDS() {}

FileDS.prototype = new DsBase;

FileDS.prototype.save = function(filename, data) {
	if(!fs.existsSync(config.PRM_OUTPUTFOLDER)) {
		fs.mkdirSync(config.PRM_OUTPUTFOLDER);
		LOG.log("PRM output folder haven't existed yet. " + config.PRM_OUTPUTFOLDER + " created.");
	}
	var outputFile = path.join(config.PRM_OUTPUTFOLDER, filename);

    fs.writeFileSync(outputFile, JSON.stringify(data, null, '\t'), UTF8);
};


module.exports = FileDS;