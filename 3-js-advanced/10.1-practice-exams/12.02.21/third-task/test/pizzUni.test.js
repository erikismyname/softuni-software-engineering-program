const pizzUni = require('../pizzUni');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check the makeAnOrder method', () => {

        it('Should return a correct value when the input is valid', () => {

            const inputOne = { orderedPizza: 'a', orderedDrink: 'a', };

            const inputTwo = { orderedPizza: 'a', };

            expect(pizzUni.makeAnOrder(inputOne)).to.equal('You just ordered a and a.');

            expect(pizzUni.makeAnOrder(inputTwo)).to.equal('You just ordered a');

        });

        it('Should return a correct value when the input is invalid', () => {

            const inputOne = { orderedDrink: 'a', };


            expect(() => pizzUni.makeAnOrder(inputOne)).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');

        });

    });

    describe('Check the getRemainingWork method', () => {

        it('Should return a correct value when all of the pizzas are ready', () => {

            const inputOne = [{ pizzaName: 'a', status: 'ready', }];

            const inputTwo = [{ pizzaName: 'a', status: 'ready', }, { pizzaName: 'b', status: 'ready', }];

            expect(pizzUni.getRemainingWork(inputOne)).to.equal('All orders are complete!');

            expect(pizzUni.getRemainingWork(inputTwo)).to.equal('All orders are complete!');


        });

        it('Should return a correct value when not all of the pizzas are ready', () => {

            const inputOne = [{ pizzaName: 'a', status: 'preparing', }];

            const inputTwo = [{ pizzaName: 'a', status: 'preparing', }, { pizzaName: 'b', status: 'preparing', }];

            const inputThree = [{ pizzaName: 'a', status: 'ready', }, { pizzaName: 'b', status: 'preparing', }, { pizzaName: 'c', status: 'preparing', }];

            expect(pizzUni.getRemainingWork(inputOne)).to.equal('The following pizzas are still preparing: a.');

            expect(pizzUni.getRemainingWork(inputTwo)).to.equal('The following pizzas are still preparing: a, b.');

            expect(pizzUni.getRemainingWork(inputThree)).to.equal('The following pizzas are still preparing: b, c.');


        });

    });

    describe('Check the orderType method', () => {

        it('Should return a correct value when the type of order is carry out', () => {

            expect(pizzUni.orderType(1, 'Carry Out')).to.equal(1 * 0.90);

            expect(pizzUni.orderType(10, 'Carry Out')).to.equal(10 * 0.90);


        });

        it('Should return a correct value when the type of order is delivery', () => {

            expect(pizzUni.orderType(1, 'Delivery')).to.equal(1);

            expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);


        });

    });

});