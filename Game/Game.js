var Board = require("../Board/Board");

var Game = function() {
    var board;
    var players;
    var currentTurn;
    var movesPlayed = [];
    var state = {
        "ACTIVE": false,
        "BLACK WIN": false,
        "WHITE WIN": false,
        "STALEMATE": false,
        "RESIGN": false
    }

    function init(p1, p2) {
        players = [p1, p2];
        board = new Board();

        if (p1.isGoldSide()) 
            currentTurn = p1;
        else
            currentTurn = p2;        
    }
    
    return {
        init,
    }
};

module.exports = Game;