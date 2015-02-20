/**
 * Created by sph3r on 02/18/15.
 */

var config = require('config');
var Parser = require('./lib/parser');

var p = new Parser();
//p.parseFile('oplsaa.prm');
p.parseFolder(config.PRM_INPUTFOLDER);
