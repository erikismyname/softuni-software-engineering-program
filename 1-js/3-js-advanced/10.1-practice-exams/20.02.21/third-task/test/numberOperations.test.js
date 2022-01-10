const numberOperations = require('../numberOperations');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check the powNumber method', () => {

        it('Should return a correct value with both one digit and two digit number', () => {

            expect(numberOperations.powNumber(1)).to.equal(1);

            expect(numberOperations.powNumber(10)).to.equal(100);

        });

    });

    describe('Check the numberChecker method', () => {

        it('Should return a correct value with a valid input', () => {

            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');

            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');

            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');

            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');

            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');

            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');


        });

        it('Should return a correct value with an ivalid input', () => {

            expect(() => numberOperations.numberChecker('a')).to.throw(Error, 'The input is not a number!');

            expect(() => numberOperations.numberChecker(['a'])).to.throw(Error, 'The input is not a number!');

            expect(() => numberOperations.numberChecker({})).to.throw(Error, 'The input is not a number!');

            expect(() => numberOperations.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');

        });

    });

    describe('Check the sumArrays method', () => {

        it('Should return a correct value with a valid input', () => {

            let arrOne = [1];

            let arrTwo = [1];

            expect(numberOperations.sumArrays(arrOne, arrTwo)).to.deep.equal([2]);

            arrOne = [1, 2];

            arrTwo = [3, 4];

            expect(numberOperations.sumArrays(arrOne, arrTwo)).to.deep.equal([4, 6]);

            arrOne = [1, 2];

            arrTwo = [1];

            expect(numberOperations.sumArrays(arrOne, arrTwo)).to.deep.equal([2, 2]);

            arrOne = [2];

            arrTwo = [2, 3];

            expect(numberOperations.sumArrays(arrOne, arrTwo)).to.deep.equal([4, 3]);

        });

    });

});