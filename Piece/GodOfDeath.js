const Vector2 = require("../Vector2");
var Piece = require("./Piece");

var GodOfDeath = function(isGold) {
    var godOfDeath = new Piece({
        isDead: false,
        isGold,
        moveDistance: 5,
        movePattern: [
            new Vector2(0, 1),
            new Vector2(1, 1),
            new Vector2(1, 0),
            new Vector2(1, -1),
            new Vector2(0, -1),
            new Vector2(-1, -1),
            new Vector2(-1, 0),
            new Vector2(-1, 1),
        ]
    });

    godOfDeath.asString = function() {
        return "deth"
    };

    return godOfDeath; 
}

module.exports = GodOfDeath;