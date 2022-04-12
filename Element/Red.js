var Element = require("./Element");
var Vector2 = require("../Vector2");
var Fire = require("../Environment/Fire");

var Red = function() {
    var red = new Element({
        destroysOccupant: true,
        hasKnockback: false,
        environment: new Fire(),
        spellPattern: [
            new Vector2(0, 1),
            new Vector2(0, -1)
        ]
    });

    red.asString = function() {
        return "redd";
    };

    return red;
}

module.exports = Red;