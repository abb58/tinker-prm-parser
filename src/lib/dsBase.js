/**
 * Created by sph3r on 02/18/15.
 */

function DsBase() {}

DsBase.prototype.save = function(collection, data) {
    return new Error("Interface definition - use inherited class instead");
};

DsBase.prototype.load = function(collection) {
    return new Error("Interface definition - use inherited class instead");
};

module.exports = DsBase;