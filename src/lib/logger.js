/**
 * Created by sph3r on 02/18/15.
 */

var Logger = {};

// logging to file
var fs = require('fs');
var UTF8 = { encoding: 'utf8' };
var moment = require('moment');

Logger.log = function(message) {
    console.log(message);
};

Logger.error = function(message) {
    console.error(message);
};

Logger.warn = function(message) {
    console.warn(message);
};

Logger.print = function(message) {
    process.stdout.write(message);
};

Logger.logFile = function(file, message) {
    fs.appendFileSync(file, moment().format('MM-DD-YYYY HH:mm:ss') + ' :: ' + message + '\n', UTF8);
};

module.exports = Logger;