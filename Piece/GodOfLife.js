const Vector2 = require("../Vector2");
var Piece = require("./Piece");

var GodOfLife = function(isGold) {
    var godOfLife = new Piece({
        isDead: false,
        isGold,
        moveDistance: 1,
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

    godOfLife.asString = function() {
        return "life"
    };

    return godOfLife; 
}

module.exports = GodOfLife;