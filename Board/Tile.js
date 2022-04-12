var Tile = function(spec) {
    var x = spec.x;
    var y = spec.y;
    var piece = spec.piece;
    var element = spec.element;
    var environment = spec.environment;

    function draw() {
        var pieceStr = piece !== null ? piece.asString() : "none";
        var elementStr = element !== null ? element.asString() : "none";
        var environmentStr = environment !== null ? environment.asString() : "none";

        return `
        ---------
        |Pi:${pieceStr}|
        |El:${elementStr}|
        |En:${environmentStr}|
        ---------
        `;
    }

    return {
        x,
        y,
        piece,
        element,
        environment,
        draw
    };
}

module.exports = Tile;