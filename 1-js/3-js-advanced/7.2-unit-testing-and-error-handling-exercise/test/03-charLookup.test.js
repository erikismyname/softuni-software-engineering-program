const lookupChar = require('../03-charLookup');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Happy path', () => {

        it('Return a correct value when both parameters are valid', () => {

            expect(lookupChar('a', 0)).to.equal('a');

            expect(lookupChar('ab', 1)).to.equal('b');

        });

    });

    describe('Non-happy path', () => {

        it('Return a correct value when the first parameter is not of type string', () => {

            expect(lookupChar(1, 1)).to.be.undefined;

            expect(lookupChar(null, 1)).to.be.undefined;

            expect(lookupChar(undefined, 1)).to.be.undefined;

            expect(lookupChar([], 1)).to.be.undefined;

            expect(lookupChar({}, 1)).to.be.undefined;

        });

        it('Return a correct value when the second parameter is not of type number or is a floating point number', () => {

            expect(lookupChar('a', 'a')).to.be.undefined;

            expect(lookupChar('a', null)).to.be.undefined;

            expect(lookupChar('a', undefined)).to.be.undefined;

            expect(lookupChar('a', [])).to.be.undefined;

            expect(lookupChar('a', {})).to.be.undefined;

            expect(lookupChar('a', 1.1)).to.be.undefined;

        });

        it('Return a correct value when the second parameter is valid but it out of range', () => {

            expect(lookupChar('a', -1)).to.equal('Incorrect index');

            expect(lookupChar('a', 2)).to.equal('Incorrect index');

        });

    });

});