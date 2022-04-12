var Environment = function(spec) {
    var isTraversable = spec.isTraversable;
    var destroysOccupant = spec.destroysOccupant;

    return {
        isTraversable,
        destroysOccupant
    }
}

module.exports = Environment;