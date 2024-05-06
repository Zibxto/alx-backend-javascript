const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber test", function () {
    it("checks equality", function () {
        assert.equal(calculateNumber("SUM", 1, 1), 2);
        assert.equal(calculateNumber("SUBTRACT", 1, 1), 0);
        assert.equal(calculateNumber("DIVIDE", 1, 1), 1);
        assert.equal(calculateNumber("DIVIDE", 1, 0), "Error");
    });

    it("checks if numbers are rounded", function () {
        assert.equal(calculateNumber("SUM", 2.5, 2), 5);
        assert.equal(calculateNumber("SUBTRACT", 2.1, 2), 0);
        assert.equal(calculateNumber("DIVIDE", 2.5, 3), 1);
    })
});
