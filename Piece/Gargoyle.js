const Vector2 = require("../Vector2");
var Piece = require("./Piece");

var Gargoyle = function(isGold) {
    var gargoyle = new Piece({
        isDead: false,
        isGold,
        moveDistance: 1,
        movePattern: [
            new Vector2(0, 1),
            new Vector2(1, 1),
            new Vector2(1, -1),
            new Vector2(0, -1),
            new Vector2(-1, -1),
            new Vector2(-1, 1),
        ]
    });

    gargoyle.asString = function() {
        return "garg"
    };

    return gargoyle; 
}

module.exports = Gargoyle;