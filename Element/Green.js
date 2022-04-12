var Element = require("./Element");
var Vector2 = require("../Vector2");
var Plant = require("../Environment/Plant");

var Green = function() {
    var green = new Element({
        destroysOccupant: false,
        hasKnockback: true,
        environment: new Plant(),
        spellPattern: [
            new Vector2(0, 1),
            new Vector2(0, -1)
        ]
    });

    green.asString = function() {
        return "gren";
    };

    return green;
}

module.exports = Green;