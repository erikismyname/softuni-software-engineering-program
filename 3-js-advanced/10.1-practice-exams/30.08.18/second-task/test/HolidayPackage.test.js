const HolidayPackage = require('../HolidayPackage');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check instantiation', () => {

        it('Should return a valid object when instantiated', () => {

            const package = new HolidayPackage('A', 'B');

            const result = {

                vacationers: [],

                destination: 'A',

                season: 'B',

                _insuranceIncluded: false,

            };

            expect(package).to.deep.equal(result);

        });

    });

    describe('Check the showVacationers method', () => {

        it('Should return a correct value when vacationers list in not empty', () => {

            const package = new HolidayPackage('A', 'B');

            package.addVacationer('A B');

            expect(package.showVacationers()).to.equal(`Vacationers:\nA B`);

            package.addVacationer('C D');

            expect(package.showVacationers()).to.equal(`Vacationers:\nA B\nC D`);


        });

        it('Should return a correct value when vacationers list in empty', () => {

            const package = new HolidayPackage('A', 'B');

            expect(package.showVacationers()).to.equal('No vacationers are added yet');

        });

    });

    describe('Check the addVacationer method', () => {

        it('Should return a correct value when input is valid', () => {

            const package = new HolidayPackage('A', 'B');

            package.addVacationer('A B');

            expect(package.vacationers).to.deep.equal(['A B']);

            package.addVacationer('C D');

            expect(package.vacationers).to.deep.equal(['A B', 'C D']);

        });

        it('Should return a correct value when input is invalid', () => {

            const package = new HolidayPackage('A', 'B');

            const firstMessage = 'Vacationer name must be a non-empty string';

            const secondMessage = 'Name must consist of first name and last name';

            expect(() => package.addVacationer(1)).to.throw(Error, firstMessage);

            expect(() => package.addVacationer([])).to.throw(Error, firstMessage);

            expect(() => package.addVacationer({})).to.throw(Error, firstMessage);

            expect(() => package.addVacationer(null)).to.throw(Error, firstMessage);

            expect(() => package.addVacationer(undefined)).to.throw(Error, firstMessage);

            expect(() => package.addVacationer(true)).to.throw(Error, firstMessage);

            expect(() => package.addVacationer(false)).to.throw(Error, firstMessage);

            expect(() => package.addVacationer(' ')).to.throw(Error, firstMessage);

            expect(() => package.addVacationer('')).to.throw(Error, secondMessage);

            expect(() => package.addVacationer('a b c')).to.throw(Error, secondMessage);


        });

    });

    describe('Check the insurance getter', () => {

        it('Should return a correct value when accessing the getter', () => {

            const package = new HolidayPackage('A', 'B');

            expect(package.insuranceIncluded).to.be.false;

            package.insuranceIncluded = true;

            expect(package.insuranceIncluded).to.be.true;

        });

    });

    describe('Check the insurance setter', () => {

        it('Should return a correct value when the input is valid', () => {

            const package = new HolidayPackage('A', 'B');

            package.insuranceIncluded = true;

            expect(package.insuranceIncluded).to.be.true;

        });

        it('Should return a correct value when the input is invalid', () => {

            const package = new HolidayPackage('A', 'B');

            const message = 'Insurance status must be a boolean';

            expect(() => package.insuranceIncluded = 1).to.throw(Error, message);

            expect(() => package.insuranceIncluded = '').to.throw(Error, message);

            expect(() => package.insuranceIncluded = []).to.throw(Error, message);

            expect(() => package.insuranceIncluded = {}).to.throw(Error, message);

            expect(() => package.insuranceIncluded = null).to.throw(Error, message);

            expect(() => package.insuranceIncluded = undefined).to.throw(Error, message);

        });

    });

    describe('Check the generateHolidayPackage method', () => {

        it('Should return a correct value when the input is invalid', () => {

            const package = new HolidayPackage('A', 'B');

            expect(() => package.generateHolidayPackage()).to.throw(Error, 'There must be at least 1 vacationer added');

        });

        it('Should return a correct value when the input is valid', () => {

            let package = new HolidayPackage('A', 'Summer');

            package.addVacationer('A B');

            let price = 400 + 200;

            let result = `Holiday Package Generated\nDestination: ${package.destination}\n${package.showVacationers()}\nPrice: ${price}`;

            expect(package.generateHolidayPackage()).to.equal(result);


            package = new HolidayPackage('B', 'Winter');

            package.addVacationer('A B');

            package.insuranceIncluded = true;

            price = 400 + 200 + 100;

            result = `Holiday Package Generated\nDestination: ${package.destination}\n${package.showVacationers()}\nPrice: ${price}`;

            expect(package.generateHolidayPackage()).to.equal(result);


            package = new HolidayPackage('C', '');

            package.addVacationer('A B');

            package.insuranceIncluded = true;

            price = 400 + 100;

            result = `Holiday Package Generated\nDestination: ${package.destination}\n${package.showVacationers()}\nPrice: ${price}`;

            expect(package.generateHolidayPackage()).to.equal(result);


            package = new HolidayPackage('D', 'Summer');

            package.addVacationer('A B');
            
            package.addVacationer('C D');

            package.insuranceIncluded = true;

            price = (400 * 2) + 200 + 100;

            result = `Holiday Package Generated\nDestination: ${package.destination}\n${package.showVacationers()}\nPrice: ${price}`;

            expect(package.generateHolidayPackage()).to.equal(result);

        });

    });

});