var Board = require("../Board/Board");

var Game = function (spec) {
    var board, players, currentTurn;
    var movesPlayed = [];
    var state = {
        "ACTIVE": false,
        "BLACK WIN": false,
        "WHITE WIN": false,
        "STALEMATE": false,
        "RESIGN": false
    }

    players = [spec.p1, spec.p2];
    board = new Board();

    if (spec.p1.isGoldSide())
        this.currentTurn = spec.p1;
    else
        this.currentTurn = spec.p2;

    setState("ACTIVE", true);
    // setState("ACTIE", true);

    function setState(targetState, isActive) {
        if (!Object.keys(state).includes(targetState)) {
            throw `Specified state: ${targetState} is not a valid state.`;
        }

        state[targetState] = isActive;
    }

    function render() {
        return board.draw();
    }

    return {
        render
    }
};

module.exports = Game;