var Environment = require("./Environment");

var Plant = function() {
    var plant = new Environment({
        isTraversable: true,
        destroysOccupant: true
    });

    plant.asString = function() {
        return "leaf";
    };

    return plant;
}

module.exports = Plant;