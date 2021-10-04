const dealership = require('../dealership');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check the newCarCost method', () => {

        it('Should return a correct value when the customer can get a discount', () => {

            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);

        });

        it('Should return a correct value when the customer cannot get a discount', () => {

            expect(dealership.newCarCost('a', 20000)).to.equal(20000);

        });

    });

    describe('Check the carEquipment method', () => {

        it('Should return a correct when specifying extras', () => {

            expect(dealership.carEquipment(['a', 'b'], [0])).to.deep.equal(['a']);

            expect(dealership.carEquipment(['a', 'b'], [1])).to.deep.equal(['b']);

            expect(dealership.carEquipment(['a', 'b'], [0, 1])).to.deep.equal(['a', 'b']);

        });

    });

    describe('Check the euroCategory method', () => {

        it('Should return a correct when category is >= 4', () => {

            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${15000 * 0.95}.`);

            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${15000 * 0.95}.`);

        });

        it('Should return a correct when category is < 4', () => {

            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');

        });

    });

});