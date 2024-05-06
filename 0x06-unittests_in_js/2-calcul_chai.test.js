const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber test", function () {
    it("checks equality", function () {
        expect(calculateNumber("SUM", 1, 1)).to.equal(2);
        expect(calculateNumber("SUBTRACT", 1, 1)).to.equal(0);
        expect(calculateNumber("DIVIDE", 1, 1)).to.equal(1);
        expect(calculateNumber("DIVIDE", 1, 0)).to.equal("Error");
    });

    it("checks if numbers are rounded", function () {
        expect(calculateNumber("SUM", 2.5, 2)).to.equal(5);
        expect(calculateNumber("SUBTRACT", 2.1, 2)).to.equal(0);
        expect(calculateNumber("DIVIDE", 2.5, 3)).to.equal(1);
    })
});
