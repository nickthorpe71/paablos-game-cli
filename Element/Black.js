var Element = require("./Element");
var Vector2 = require("../Vector2");

var Black = function() {
    var black = new Element({
        destroysOccupant: true,
        hasKnockback: false,
        environment: null,
        spellPattern: [
            new Vector2(1, 1),
            new Vector2(1, -1),
            new Vector2(-1, -1),
            new Vector2(-1, 1)
        ]
    });

    black.asString = function() {
        return "blak";
    };

    return black;
}

module.exports = Black;