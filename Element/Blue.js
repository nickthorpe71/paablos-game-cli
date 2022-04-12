var Element = require("./Element");
var Vector2 = require("../Vector2");
var Water = require("../Environment/Water");

var Blue = function() {
    var blue = new Element({
        destroysOccupant: true,
        hasKnockback: false,
        environment: new Water(),
        spellPattern: [
            new Vector2(1, 0),
            new Vector2(-1, 0)
        ]
    });

    blue.asString = function() {
        return "blue";
    };

    return blue;
}

module.exports = Blue;