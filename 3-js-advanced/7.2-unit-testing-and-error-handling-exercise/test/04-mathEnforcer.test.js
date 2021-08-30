const mathEnforcer = require('../04-mathEnforcer');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Happy path', () => {

        describe('Check the addFive object method', () => {

            it('Return a correct value with different values', () => {

                expect(mathEnforcer.addFive(1)).to.equal(6);

                expect(mathEnforcer.addFive(-1)).to.equal(4);

                expect(mathEnforcer.addFive(1.1)).to.be.closeTo(1.1 + 5, 0.01);

                expect(mathEnforcer.addFive(-1.1)).to.be.closeTo(-1.1 + 5, 0.01);

            });

        });

        describe('Check the subtractTen object method', () => {

            it('Return a correct value with different values', () => {

                expect(mathEnforcer.subtractTen(1)).to.equal(-9);

                expect(mathEnforcer.subtractTen(-1)).to.equal(-11);

                expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(1.1 - 10, 0.01);

                expect(mathEnforcer.subtractTen(-1.1)).to.be.closeTo(-1.1 - 10, 0.01);

            });

        });

        describe('Check the sum object method', () => {

            it('Return a correct value with different values', () => {

                expect(mathEnforcer.sum(1, 1)).to.equal(2);

                expect(mathEnforcer.sum(1, -1)).to.equal(0);

                expect(mathEnforcer.sum(-1, 1)).to.equal(0);

                expect(mathEnforcer.sum(-1, -1)).to.equal(-2);

                expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(1.1 + 1.1, 0.01);

                expect(mathEnforcer.sum(1.1, -1.1)).to.be.closeTo(1.1 - 1.1, 0.01);

                expect(mathEnforcer.sum(-1.1, 1.1)).to.be.closeTo(-1.1 + 1.1, 0.01);

                expect(mathEnforcer.sum(-1.1, -1.1)).to.be.closeTo(-1.1 - 1.1, 0.01);

            });

        });

    });

    describe('Non-happy path', () => {

        describe('Check the addFive object method', () => {

            it('Return a correct value with invalid input', () => {

                expect(mathEnforcer.addFive('a')).to.be.undefined;

                expect(mathEnforcer.addFive(null)).to.be.undefined;

                expect(mathEnforcer.addFive(undefined)).to.be.undefined;

                expect(mathEnforcer.addFive([])).to.be.undefined;

                expect(mathEnforcer.addFive({})).to.be.undefined;

            });

        });

        describe('Check the subtractTen object method', () => {

            it('Return a correct value with invalid input', () => {

                expect(mathEnforcer.subtractTen('a')).to.be.undefined;

                expect(mathEnforcer.subtractTen(null)).to.be.undefined;

                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;

                expect(mathEnforcer.subtractTen([])).to.be.undefined;

                expect(mathEnforcer.subtractTen({})).to.be.undefined;

            });

        });

        describe('Check the sum object method', () => {

            it('Return a correct value when one of the inputs is invalid', () => {

                expect(mathEnforcer.sum(1, 'a')).to.be.undefined;

                expect(mathEnforcer.sum(1, null)).to.be.undefined;

                expect(mathEnforcer.sum(-1, undefined)).to.be.undefined;

                expect(mathEnforcer.sum(-1, [])).to.be.undefined;

                expect(mathEnforcer.sum(-1, {})).to.be.undefined;

                expect(mathEnforcer.sum(1.1, 'a')).to.be.undefined;

                expect(mathEnforcer.sum(1.1, null)).to.be.undefined;

                expect(mathEnforcer.sum(-1.1, undefined)).to.be.undefined;

                expect(mathEnforcer.sum(-1.1, [])).to.be.undefined;

                expect(mathEnforcer.sum(-1.1, {})).to.be.undefined;

                expect(mathEnforcer.sum('a', 1)).to.be.undefined;

                expect(mathEnforcer.sum(null, 1)).to.be.undefined;

                expect(mathEnforcer.sum(undefined, -1)).to.be.undefined;

                expect(mathEnforcer.sum([], -1)).to.be.undefined;

                expect(mathEnforcer.sum({}, -1)).to.be.undefined;

                expect(mathEnforcer.sum('a', 1.1)).to.be.undefined;

                expect(mathEnforcer.sum(null, 1.1)).to.be.undefined;

                expect(mathEnforcer.sum(undefined, -1.1)).to.be.undefined;

                expect(mathEnforcer.sum([], -1.1)).to.be.undefined;

                expect(mathEnforcer.sum({}, -1.1)).to.be.undefined;

            });

        });

    });

});