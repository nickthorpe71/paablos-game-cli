var Environment = require("./Environment");

var Water = function() {
    var water = new Environment({
        isTraversable: true,
        destroysOccupant: true
    });

    water.asString = function() {
        return "pool";
    };

    return water;
}

module.exports = Water;