var Piece = function(spec) {
    var isDead = spec.isDead;
    var isGold = spec.isGold;
    var moveDistance = spec.moveDistance;
    var movePattern = spec.movePattern;

    return {
        isDead,
        isGold,
        moveDistance,
        movePattern
    }
}

module.exports = Piece;