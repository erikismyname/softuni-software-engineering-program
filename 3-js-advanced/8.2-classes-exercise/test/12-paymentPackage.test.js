const PaymentPackage = require('../12-paymentPackage');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check instantiation', () => {

        it('Should not throw and should return an object when instantiated correctly', () => {

            const package = new PaymentPackage('a', 1);

            expect(package).to.not.throw;

            expect(package).to.be.an('object');

        });

        it('Should throw when the first parameter is invalid', () => {

            const message = 'Name must be a non-empty string';

            expect(() => new PaymentPackage('', 1)).to.throw(Error, message);

            expect(() => new PaymentPackage(1, 1)).to.throw(Error, message);

            expect(() => new PaymentPackage([], 1)).to.throw(Error, message);

            expect(() => new PaymentPackage({}, 1)).to.throw(Error, message);

            expect(() => new PaymentPackage(null, 1)).to.throw(Error, message);

            expect(() => new PaymentPackage(undefined, 1)).to.throw(Error, message);

            expect(() => new PaymentPackage(true, 1)).to.throw(Error, message);

            expect(() => new PaymentPackage(false, 1)).to.throw(Error, message);


        });

        it('Should throw when the second parameter is invalid', () => {

            const message = 'Value must be a non-negative number';

            expect(() => new PaymentPackage('a', '')).to.throw(Error, message);

            expect(() => new PaymentPackage('a', -1)).to.throw(Error, message);

            expect(() => new PaymentPackage('a', [])).to.throw(Error, message);

            expect(() => new PaymentPackage('a', {})).to.throw(Error, message);

            expect(() => new PaymentPackage('a', null)).to.throw(Error, message);

            expect(() => new PaymentPackage('a', undefined)).to.throw(Error, message);

            expect(() => new PaymentPackage('a', true)).to.throw(Error, message);

            expect(() => new PaymentPackage('a', false)).to.throw(Error, message);

        });

    });

    describe('Check the name accessor', () => {

        it('Should return a correct value when accessing the name getter', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.name).to.equal('a');

        });

        it('Should behave correctly when accessing the name setter with valid input', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.name = 'b').to.not.throw;

            expect(package.name).to.equal('b');

        });

        it('Should throw when accessing the name setter with invalid input', () => {

            const package = new PaymentPackage('a', 1);

            const message = 'Name must be a non-empty string';

            expect(() => package.name = '').to.throw(Error, message);

            expect(() => package.name = 1).to.throw(Error, message);

            expect(() => package.name = []).to.throw(Error, message);

            expect(() => package.name = {}).to.throw(Error, message);

            expect(() => package.name = null).to.throw(Error, message);

            expect(() => package.name = undefined).to.throw(Error, message);

            expect(() => package.name = true).to.throw(Error, message);

            expect(() => package.name = false).to.throw(Error, message);

        });

    });

    describe('Check the value accessor', () => {

        it('Should return a correct value when accessing the value getter', () => {

            const package = new PaymentPackage('a', 0);

            expect(package.value).to.equal(0);

        });

        it('Should behave correctly when accessing the value    setter with valid input', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.value = 2).to.not.throw;

            expect(package.value).to.equal(2);

        });

        it('Should throw when accessing the value setter with invalid input', () => {

            const package = new PaymentPackage('a', 1);

            const message = 'Value must be a non-negative number';

            expect(() => package.value = '').to.throw(Error, message);

            expect(() => package.value = -1).to.throw(Error, message);

            expect(() => package.value = []).to.throw(Error, message);

            expect(() => package.value = {}).to.throw(Error, message);

            expect(() => package.value = null).to.throw(Error, message);

            expect(() => package.value = undefined).to.throw(Error, message);

            expect(() => package.value = true).to.throw(Error, message);

            expect(() => package.value = false).to.throw(Error, message);

        });

    });

    describe('Check the VAT accessor', () => {

        it('Should return a correct value when accessing the VAT getter', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.VAT).to.equal(20);

        });

        it('Should behave correctly when accessing the VAT    setter with valid input', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.VAT = 1).to.not.throw;

            expect(package.VAT).to.equal(1);

        });

        it('Should throw when accessing the VAT setter with invalid input', () => {

            const package = new PaymentPackage('a', 1);

            const message = 'VAT must be a non-negative number';

            expect(() => package.VAT = '').to.throw(Error, message);

            expect(() => package.VAT = -1).to.throw(Error, message);

            expect(() => package.VAT = []).to.throw(Error, message);

            expect(() => package.VAT = {}).to.throw(Error, message);

            expect(() => package.VAT = null).to.throw(Error, message);

            expect(() => package.VAT = undefined).to.throw(Error, message);

            expect(() => package.VAT = true).to.throw(Error, message);

            expect(() => package.VAT = false).to.throw(Error, message);

        });

    });

    describe('Check the active accessor', () => {

        it('Should return a correct value when accessing the active getter', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.active).to.be.true;

        });

        it('Should behave correctly when accessing the active    setter with valid input', () => {

            const package = new PaymentPackage('a', 1);

            expect(package.active = false).to.not.throw;

            expect(package.active).to.be.false;

        });

        it('Should throw when accessing the active setter with invalid input', () => {

            const package = new PaymentPackage('a', 1);

            const message = 'Active status must be a boolean';

            expect(() => package.active = '').to.throw(Error, message);

            expect(() => package.active = 1).to.throw(Error, message);

            expect(() => package.active = -1).to.throw(Error, message);

            expect(() => package.active = []).to.throw(Error, message);

            expect(() => package.active = {}).to.throw(Error, message);

            expect(() => package.active = null).to.throw(Error, message);

            expect(() => package.active = undefined).to.throw(Error, message);

        });

    });

    describe('Check the toString method', () => {

        it('Should return a correct value when active property is true', () => {

            const package = new PaymentPackage('a', 1);

            const result = [

                `Package: a`,
                `- Value (excl. VAT): 1`,
                `- Value (VAT 20%): ${1 * (1 + 20 / 100)}`,

            ];

            expect(package.toString()).to.equal(result.join('\n'));

        });

        it('Should return a correct value when active property is true', () => {

            const package = new PaymentPackage('a', 1);

            package.active = false;

            const result = [

                `Package: a (inactive)`,
                `- Value (excl. VAT): 1`,
                `- Value (VAT 20%): ${1 * (1 + 20 / 100)}`,

            ];

            expect(package.toString()).to.equal(result.join('\n'));

        });

    });

});