const Repository = require('../Repository')

const { expect } = require('chai');

describe('Check functionality', () => {

    const properties = { name: 'string', age: 'number', birthday: 'object', };

    const entityOneVal = { name: 'a', age: 0, birthday: new Date(0, 0, 0), };

    const entityTwoVal = { name: 'b', age: 1, birthday: new Date(1, 1, 1), };

    const entityOneInv = { name: 1, age: 0, birthday: new Date(0, 0, 0), };

    const entityTwoInv = { name: 'a', age: 'a', birthday: new Date(0, 0, 0), };

    const entityThreeInv = { name: 'a', age: 0, birthday: 0 };

    const entityFourInv = { a: 'A', age: 1, birthday: new Date(1, 1, 1), };

    const entityFiveInv = { name: 'A', a: 1, birthday: new Date(1, 1, 1), };

    const entitySixInv = { name: 'A', age: 1, a: new Date(1, 1, 1), };

    describe('Check the add method', () => {

        it('Should behave correctly when the input is valid', () => {

            const repo = new Repository(properties);

            expect(repo.count).to.equal(0);

            expect(repo.add(entityOneVal)).to.equal(0);

            expect(repo.count).to.equal(1);

            expect(repo.add(entityTwoVal)).to.equal(1);

            expect(repo.count).to.equal(2);

        });

        it('Should behave correctly when the input is invalid', () => {

            const repo = new Repository(properties);

            expect(() => repo.add(entityOneInv)).to.throw(Error, 'Property name is not of correct type!');

            expect(() => repo.add(entityTwoInv)).to.throw(Error, 'Property age is not of correct type!');

            expect(() => repo.add(entityThreeInv)).to.throw(Error, 'Property birthday is not of correct type!');

            expect(() => repo.add(entityFourInv)).to.throw(Error, 'Property name is missing from the entity!');

            expect(() => repo.add(entityFiveInv)).to.throw(Error, 'Property age is missing from the entity!');

            expect(() => repo.add(entitySixInv)).to.throw(Error, 'Property birthday is missing from the entity!');

        });

    });

    describe('Check the getId method', () => {

        it('Should behave correctly when the input is valid', () => {

            const repo = new Repository(properties);

            repo.add(entityOneVal);

            expect(repo.getId(0)).to.equal(entityOneVal);

            repo.add(entityTwoVal);

            expect(repo.getId(1)).to.equal(entityTwoVal);

        });

        it('Should behave correctly when the input is invalid', () => {

            const repo = new Repository(properties);

            expect(() => repo.getId(0)).to.throw(Error, 'Entity with id: 0 does not exist!');

            repo.add(entityOneVal);

            expect(() => repo.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');

            repo.add(entityTwoVal);

            expect(() => repo.getId(2)).to.throw(Error, 'Entity with id: 2 does not exist!');

            expect(() => repo.getId(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');

        });

    });

    describe('Check the update method', () => {

        it('Should behave correctly when the input is valid', () => {

            const repo = new Repository(properties);

            repo.add(entityOneVal);

            expect(repo.getId(0)).to.equal(entityOneVal);

            repo.update(0, entityTwoVal);

            expect(repo.getId(0)).to.equal(entityTwoVal);

        });

        it('Should behave correctly when the input is invalid', () => {

            const repo = new Repository(properties);

            repo.add(entityOneVal);

            expect(() => repo.update(0, entityOneInv)).to.throw(Error, 'Property name is not of correct type!');

            expect(() => repo.update(0, entityTwoInv)).to.throw(Error, 'Property age is not of correct type!');

            expect(() => repo.update(0, entityThreeInv)).to.throw(Error, 'Property birthday is not of correct type!');

            expect(() => repo.update(0, entityFourInv)).to.throw(Error, 'Property name is missing from the entity!');

            expect(() => repo.update(0, entityFiveInv)).to.throw(Error, 'Property age is missing from the entity!');

            expect(() => repo.update(0, entitySixInv)).to.throw(Error, 'Property birthday is missing from the entity!');

            expect(() => repo.update(1, entityTwoVal)).to.throw(Error, 'Entity with id: 1 does not exist!');

        });

    });

    describe('Check the del method', () => {

        it('Should behave correctly when the input is valid', () => {

            const repo = new Repository(properties);

            expect(repo.count).to.equal(0);

            repo.add(entityOneVal);

            expect(repo.count).to.equal(1);

            repo.add(entityTwoVal);

            expect(repo.count).to.equal(2);

            expect(repo.getId(1)).to.equal(entityTwoVal);

            repo.del(1);

            expect(() => repo.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');

            repo.del(0);

            expect(() => repo.getId(0)).to.throw(Error, 'Entity with id: 0 does not exist!');

        });

        it('Should behave correctly when the input is ivalid', () => {

            const repo = new Repository(properties);

            repo.add(entityOneVal);

            expect(() => repo.del(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');

            expect(() => repo.del(1)).to.throw(Error, 'Entity with id: 1 does not exist!');

            repo.add(entityTwoVal);

            expect(() => repo.del(2)).to.throw(Error, 'Entity with id: 2 does not exist!');

        });

    });

});