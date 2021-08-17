const isSymmetric = require('../05-checkForSymmetry');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Happy path', () => {

        it('Return a correct message when array elements are numbers', () => {

            expect(isSymmetric([1])).to.be.true;

            expect(isSymmetric([1, 2, 1])).to.be.true;

        });

        it('Return a correct message when array elements are srings', () => {

            expect(isSymmetric(['a'])).to.be.true;

            expect(isSymmetric(['a', 'b', 'a'])).to.be.true;

        });

        it('Return a correct message when array elements are objects', () => {

            expect(isSymmetric([{ a: 1 }])).to.be.true;

            expect(isSymmetric([{ a: 1 }, { b: 2 }, { a: 1 }])).to.be.true;

        });

    });

    describe('Non-happy path', () => {

        it('Return a correct message if input is invalid', () => {

            expect(isSymmetric(1)).to.be.false;

            expect(isSymmetric('1')).to.be.false;

            expect(isSymmetric(null)).to.be.false;

            expect(isSymmetric(undefined)).to.be.false;

            expect(isSymmetric({})).to.be.false;

        });

        it('Return a correct message if input is valid but not symmetrical', () => {

            expect(isSymmetric([1, 2])).to.be.false;

        });

        it('Return a correct message when input is valid and symmetrical but the type of elements is different', () => {

            expect(isSymmetric(['1', 2])).to.be.false;

        });

    });

});