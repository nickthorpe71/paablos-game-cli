var Element = require("./Element");
var Vector2 = require("../Vector2");

var White = function() {
    var white = new Element({
        destroysOccupant: false,
        hasKnockback: true,
        environment: null,
        spellPattern: [
            new Vector2(0, 1),
            new Vector2(0, -1),
            new Vector2(-1, 0),
            new Vector2(1, 0)
        ]
    });

    white.asString = function() {
        return "whit";
    };

    return white;
}

module.exports = White;