const sum = require('../04-sumOfNumbers');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check with numbers', () => {

        it('Check with a single value', () => {

            expect(sum([1])).to.equal(1);

        });

        it('Check with multiple values', () => {

            expect(sum([1, 2])).to.equal(3);

        });

    });

    describe('Check with strings', () => {

        it('Check with a single value', () => {

            expect(sum(['1'])).to.equal(1);

        });

        it('Check with multiple values', () => {

            expect(sum(['1', '2'])).to.equal(3)

        });

    });

});