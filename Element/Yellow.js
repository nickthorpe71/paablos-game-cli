var Element = require("./Element");
var Vector2 = require("../Vector2");
var Rock = require("../Environment/Rock");

var Yellow = function() {
    var yellow = new Element({
        destroysOccupant: false,
        hasKnockback: true,
        environment: new Rock(),
        spellPattern: [
            new Vector2(1, 0),
            new Vector2(-1, 0)
        ]
    });

    yellow.asString = function() {
        return "yelo";
    };

    return yellow;
}

module.exports = Yellow;