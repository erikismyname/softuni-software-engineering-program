const testNumbers = require('../testNumbers');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check the sumNumber method', () => {

        it('Should return a correct sum when the input values are numbers', () => {

            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');

            expect(testNumbers.sumNumbers(1, -1)).to.equal('0.00');

            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');

            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00');

        });

        it('Should return a correct sum when the input values are not numbers', () => {

            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;

            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;

            expect(testNumbers.sumNumbers(1, [])).to.be.undefined;

            expect(testNumbers.sumNumbers([], 1)).to.be.undefined;

            expect(testNumbers.sumNumbers(1, {})).to.be.undefined;

            expect(testNumbers.sumNumbers({}, 1)).to.be.undefined;

        });

    });

    describe('Check the numberChecker method', () => {

        it('Should return a correct value when the input is valid and is even', () => {

            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');

            expect(testNumbers.numberChecker('0')).to.equal('The number is even!');

        });

        it('Should return a correct value when the input is valid and is odd', () => {

            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');

            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');

        });

        it('Should throw when the input is invalid', () => {

            expect(() => testNumbers.numberChecker('a')).to.throw(Error, 'The input is not a number!');

            expect(() => testNumbers.numberChecker({})).to.throw(Error, 'The input is not a number!');

            expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');

        });

    });

    describe('Check the averageSumArray', () => {

        it('Should return a correct averageSum when array has both different and equal values', () => {

            expect(testNumbers.averageSumArray([1])).to.equal(1);

            expect(testNumbers.averageSumArray([1, 2])).to.equal(3 / 2);

            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(6 / 3);

            expect(testNumbers.averageSumArray([2, -1])).to.equal(1 / 2);

            expect(testNumbers.averageSumArray([-2, 3])).to.equal(1 / 2);

            expect(testNumbers.averageSumArray([-1, -1])).to.equal(-2 / 2);

        });

    });

});