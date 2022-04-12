const Vector2 = require("../Vector2");
var Piece = require("./Piece");

var Witch = function(isGold) {
    var witch = new Piece({
        isDead: false,
        isGold,
        moveDistance: 5,
        movePattern: [
            new Vector2(1, 1),
            new Vector2(1, -1),
            new Vector2(-1, -1),
            new Vector2(-1, 1),
        ]
    });

    witch.asString = function() {
        return "wich"
    };

    return witch; 
}

module.exports = Witch;