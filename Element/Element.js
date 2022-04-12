var Element = function(spec) {
    var destroysOccupant = spec.destroysOccupant;
    var hasKnockback = spec.hasKnockback;
    var environment = spec.environment;
    var spellPattern = spec.spellPattern;

    return {
        destroysOccupant,
        hasKnockback,
        environment,
        spellPattern
    }
}

module.exports = Element;