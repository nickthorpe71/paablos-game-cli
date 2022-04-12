var Environment = require("./Environment");

var Rock = function() {
    var rock = new Environment({
        isTraversable: true,
        destroysOccupant: true
    });

    rock.asString = function() {
        return "rock";
    };

    return rock;
}

module.exports = Rock;