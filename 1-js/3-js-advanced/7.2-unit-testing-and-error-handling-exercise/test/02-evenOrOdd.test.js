const isOddOrEven = require('../02-evenOrOdd');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Happy path', () => {

        it('Return a correct value when the input is a string', () => {

            expect(isOddOrEven('')).to.equal('even');

            expect(isOddOrEven('a')).to.equal('odd');

            expect(isOddOrEven('ab')).to.equal('even');

        });

    });

    describe('Non-happy path', () => {

        it('Return a correct value when the input is not a string', () => {

            expect(isOddOrEven(1)).to.be.undefined;

            expect(isOddOrEven(null)).to.be.undefined;

            expect(isOddOrEven(undefined)).to.be.undefined;

            expect(isOddOrEven([])).to.be.undefined;

            expect(isOddOrEven({})).to.be.undefined;

        });

    });

});