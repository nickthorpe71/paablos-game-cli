var Player = function(spec) {
    function isGoldSide() {
        return spec.isGold;
    }

    function isHumanPlayer() {
        return spec.isHuman;
    }

    return {
        isGoldSide,
        isHumanPlayer
    };
};

module.exports = Player;