/**
 * Created by sph3r on 02/18/15.
 */

var config = require('config');
var fs = require('fs');
var path = require('path');
var LOG = require('./logger');
var _ = require('underscore');
var UTF8 = { encoding: 'utf8' };

// load datastore
var DataStorage;
if(config.DS === 'file') {
    DataStorage = require('./fileDS');
}
else {
    DataStorage = require('./mongoDS');
}

var DS = new DataStorage();
/*
    PRM Parser
 */
function Parser() {

}

Parser.prototype.parseFile = function(fileName) {
    var filePath = path.join(config.PRM_INPUTFOLDER, fileName);
    if(!fs.existsSync(filePath)) {
        LOG.error("File "+filePath+" doesn't exist... Skipping.");
        return;
    }

    LOG.log("Parsing " + fileName);

    var fileContent = fs.readFileSync(filePath, UTF8);

    var data = {};

    _.each(config.REGEX_DEFS, function(regexp, key) {
        var match;
        var namesArr = config.REGEX_GROUPNAME_DEFS[key];
        var namesArrLen = namesArr.length;

        data[key] = [];

        while( (match = regexp.exec(fileContent)) != null) {

            if(namesArrLen+1 !== match.length) {
                console.warn("Potential regexp mismatch... skipping: " + match[0]);
                continue;
            }

            // remove first string
            match.splice(0, 1);

            // create new obj with proper properties
            var entry = {};
            for(var i=0; i<namesArrLen; i++) {
                var name = namesArr[i];

                // if object was defined with name & type fields
                if(_.isObject(name)) {
                    var type = name.type.toLowerCase();
                    var value = null;
                    switch(type) {
                        case 'number':
                            value = parseFloat(match[i]);
                            break;
                        case 'string':
                            value = match[i];
                            break;
                        case 'int':
                            value = parseInt(match[i], 10);
                            break;
                        default:
                            value = match[i];
                            break;
                    }
                    entry[name.name] = value;
                }
                // otherwise, suppose it's a number
                else {
                    entry[name] = parseFloat(match[i]);
                }
            }

            data[key].push(entry);
        }
    });

    var outputFilename = path.basename(fileName, '.' + config.PRM_EXT);
    outputFilename += '.json';
    var outputFile = path.join(config.PRM_OUTPUTFOLDER, outputFilename);
    DS.save(outputFile, data);

    LOG.log(fileName + " processed, output written to " + outputFile);
};

module.exports = Parser;