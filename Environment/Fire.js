var Environment = require("./Environment");

var Fire = function() {
    var fire = new Environment({
        isTraversable: true,
        destroysOccupant: true
    });

    fire.asString = function() {
        return "fire";
    };

    return fire;
}

module.exports = Fire;