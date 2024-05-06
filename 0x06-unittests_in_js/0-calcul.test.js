const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber test", function () {
    it("checks checks equality", function () {
        assert.equal(calculateNumber(1, 1), 2);
    });

    it("checks if numbers are rounded", function () {
        assert.equal(calculateNumber(2.5, 2), 5);
        assert.equal(calculateNumber(2.1, 2), 4);
    })
});
