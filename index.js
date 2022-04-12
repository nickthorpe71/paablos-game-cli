var Game = require("./Game/Game");
var Player = require("./Player/Player");

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    var p1 = new Player({
        isGold: true,
        isHuman: true
    });
    var p2 = new Player({
        isGold: false,
        isHuman: false
    });
    var game = new Game({p1, p2});
    console.log(game.board.draw());

    playerInput();
}

var playerInput = function() {
    readline.question("Command: ", function(answer) {
        if (answer == "exit"){
            readline.close();
        } else {
            waitForUserInput();
        }
    });
}

main();