var Tile = require("./Tile");

// Piece Imports
var Demon = require("../Piece/Demon");
var Gargoyle = require("../Piece/Gargoyle");
var Witch = require("../Piece/Witch");

// Element Imports
var Red = require("../Element/Red");
var Blue = require("../Element/Blue");
var Green = require("../Element/Green");
var Yellow = require("../Element/Yellow");
var Black = require("../Element/Black");
var White = require("../Element/White");

var Board = function () {
    var tiles = tileGenerator();
    var height = 10;
    var width = 6;

    draw = function () {
        return tiles.map((row, rowIndex) => {
            var rowStrings = row.map(tile => tile.draw().split("\n").filter(str => str != ""));
            var linesToKeep = rowIndex < height ? height - 1 : height;

            var concatedRow = new Array(linesToKeep);
            concatedRow.fill("");

            rowStrings.forEach(rowStr => {
                for (var i = 0; i < linesToKeep; i++)
                    if (rowStr[i])
                        concatedRow[i] += rowStr[i].trim();
            });

            return concatedRow;
        }).reduce((prev, curr) => { return prev.concat(curr) }, []).join("\n");
    }

    var resetBoard = function () {
        tiles = tileGenerator();
    }

    return {
        draw,
        resetBoard
    };
};

function tileGenerator() {
    return [
        [
            new Tile({ x: 0, y: 0, piece: new Demon(), element: new Blue(), environment: null }),
            new Tile({ x: 1, y: 0, piece: new Demon(), element: new Black(), environment: null }),
            new Tile({ x: 2, y: 0, piece: new Witch(), element: new Red(), environment: null }),
            new Tile({ x: 3, y: 0, piece: new Witch(), element: new White(), environment: null }),
            new Tile({ x: 4, y: 0, piece: new Demon(), element: new Yellow(), environment: null }),
            new Tile({ x: 5, y: 0, piece: new Demon(), element: new Green(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 1, piece: new Gargoyle(), element: new Yellow(), environment: null }),
            new Tile({ x: 1, y: 1, piece: new Gargoyle(), element: new White(), environment: null }),
            new Tile({ x: 2, y: 1, piece: new Gargoyle(), element: new Green(), environment: null }),
            new Tile({ x: 3, y: 1, piece: new Gargoyle(), element: new Red(), environment: null }),
            new Tile({ x: 4, y: 1, piece: new Gargoyle(), element: new Blue(), environment: null }),
            new Tile({ x: 5, y: 1, piece: new Gargoyle(), element: new Black(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 2, piece: null, element: new Green(), environment: null }),
            new Tile({ x: 1, y: 2, piece: null, element: new Blue(), environment: null }),
            new Tile({ x: 2, y: 2, piece: null, element: new Yellow(), environment: null }),
            new Tile({ x: 3, y: 2, piece: null, element: new Black(), environment: null }),
            new Tile({ x: 4, y: 2, piece: null, element: new White(), environment: null }),
            new Tile({ x: 5, y: 2, piece: null, element: new Red(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 3, piece: null, element: new Red(), environment: null }),
            new Tile({ x: 1, y: 3, piece: null, element: new White(), environment: null }),
            new Tile({ x: 2, y: 3, piece: null, element: new Black(), environment: null }),
            new Tile({ x: 3, y: 3, piece: null, element: new Yellow(), environment: null }),
            new Tile({ x: 4, y: 3, piece: null, element: new Blue(), environment: null }),
            new Tile({ x: 5, y: 3, piece: null, element: new Green(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 3, piece: null, element: new Red(), environment: null }),
            new Tile({ x: 1, y: 3, piece: null, element: new White(), environment: null }),
            new Tile({ x: 2, y: 3, piece: null, element: new Black(), environment: null }),
            new Tile({ x: 3, y: 3, piece: null, element: new Yellow(), environment: null }),
            new Tile({ x: 4, y: 3, piece: null, element: new Blue(), environment: null }),
            new Tile({ x: 5, y: 3, piece: null, element: new Green(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 3, piece: null, element: new Red(), environment: null }),
            new Tile({ x: 1, y: 3, piece: null, element: new White(), environment: null }),
            new Tile({ x: 2, y: 3, piece: null, element: new Black(), environment: null }),
            new Tile({ x: 3, y: 3, piece: null, element: new Yellow(), environment: null }),
            new Tile({ x: 4, y: 3, piece: null, element: new Blue(), environment: null }),
            new Tile({ x: 5, y: 3, piece: null, element: new Green(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 3, piece: null, element: new Red(), environment: null }),
            new Tile({ x: 1, y: 3, piece: null, element: new White(), environment: null }),
            new Tile({ x: 2, y: 3, piece: null, element: new Black(), environment: null }),
            new Tile({ x: 3, y: 3, piece: null, element: new Yellow(), environment: null }),
            new Tile({ x: 4, y: 3, piece: null, element: new Blue(), environment: null }),
            new Tile({ x: 5, y: 3, piece: null, element: new Green(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 3, piece: null, element: new Red(), environment: null }),
            new Tile({ x: 1, y: 3, piece: null, element: new White(), environment: null }),
            new Tile({ x: 2, y: 3, piece: null, element: new Black(), environment: null }),
            new Tile({ x: 3, y: 3, piece: null, element: new Yellow(), environment: null }),
            new Tile({ x: 4, y: 3, piece: null, element: new Blue(), environment: null }),
            new Tile({ x: 5, y: 3, piece: null, element: new Green(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 4, piece: new Gargoyle(), element: new Black(), environment: null }),
            new Tile({ x: 1, y: 4, piece: new Gargoyle(), element: new Blue(), environment: null }),
            new Tile({ x: 2, y: 4, piece: new Gargoyle(), element: new Red(), environment: null }),
            new Tile({ x: 3, y: 4, piece: new Gargoyle(), element: new Green(), environment: null }),
            new Tile({ x: 4, y: 4, piece: new Gargoyle(), element: new White(), environment: null }),
            new Tile({ x: 5, y: 4, piece: new Gargoyle(), element: new Yellow(), environment: null })
        ],
        [
            new Tile({ x: 0, y: 5, piece: new Demon(), element: new Green(), environment: null }),
            new Tile({ x: 1, y: 5, piece: new Demon(), element: new Yellow(), environment: null }),
            new Tile({ x: 2, y: 5, piece: new Witch(), element: new White(), environment: null }),
            new Tile({ x: 3, y: 5, piece: new Witch(), element: new Red(), environment: null }),
            new Tile({ x: 4, y: 5, piece: new Demon(), element: new Black(), environment: null }),
            new Tile({ x: 5, y: 5, piece: new Demon(), element: new Blue(), environment: null })
        ]
    ]
}

module.exports = Board;