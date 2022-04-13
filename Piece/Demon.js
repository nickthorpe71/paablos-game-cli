const Vector2 = require("../Vector2");
var Piece = require("./Piece");

var Demon = function (isGold) {
    var demon = new Piece({
        isDead: false,
        isGold,
        moveDistance: 5,
        movePattern: [
            new Vector2(0, 1),
            new Vector2(1, 0),
            new Vector2(0, -1),
            new Vector2(-1, 0),
        ]
    });

    demon.asString = function () {
        return "dmon"
    };

    return demon;
}

module.exports = Demon;