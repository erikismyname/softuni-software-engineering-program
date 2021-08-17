const createCalculator = require('../07-addAndSubstract');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Initial tests', () => {

        it('Check if the result returned by the function is object', () => {

            expect(createCalculator()).to.be.an('object');

        });

        it('Check if the object contains the three expected methods and their type', () => {

            expect(createCalculator()).to.haveOwnProperty('add');

            expect(createCalculator().add).to.be.a('function');

            expect(createCalculator()).to.haveOwnProperty('subtract');

            expect(createCalculator().subtract).to.be.a('function');

            expect(createCalculator()).to.haveOwnProperty('get');

            expect(createCalculator().get).to.be.a('function');

        });

    });

    describe('Check object\'s methods functionality', () => {

        it('Check the add object method', () => {

            const sum = createCalculator();

            expect(sum.get()).to.equal(0);

            sum.add(1);

            expect(sum.get()).to.equal(1);

            sum.add('1');

            expect(sum.get()).to.equal(2);

        });

        it('Check the subtract object method', () => {

            const sum = createCalculator();

            expect(sum.get()).to.equal(0);

            sum.subtract(1);

            expect(sum.get()).to.equal(-1);

            sum.subtract('1');

            expect(sum.get()).to.equal(-2);


        });

        it('Check add and subtract methods when combined', () => {

            const sum = createCalculator();

            expect(sum.get()).to.equal(0);

            sum.add(1);

            expect(sum.get()).to.equal(1);

            sum.subtract(1);

            expect(sum.get()).to.equal(0);

            sum.add('1');

            expect(sum.get()).to.equal(1);

            sum.subtract('1');

            expect(sum.get()).to.equal(0);

        });

    });

});