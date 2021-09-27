const ChristmasMovies = require('../ChristmasMovies');

const { expect } = require('chai');

describe('Check functionality', () => {

    describe('Check instantiation', () => {

        it('Should return a valid object when instantiated correctly', () => {

            const movies = new ChristmasMovies();

            const result = {

                movieCollection: [],

                watched: {},

                actors: [],

            };

            expect(movies).to.deep.equal(result);

        });

    });

    describe('Check the buyMovie method', () => {

        it('Should return a correct value when movie is not in the collection', () => {

            const movies = new ChristmasMovies();

            expect(movies.buyMovie('a', ['a'])).to.equal('You just got a to your collection in which a are taking part!');

            expect(movies.buyMovie('b', ['a', 'b'])).to.equal('You just got b to your collection in which a, b are taking part!');

            expect(movies.buyMovie('c', ['a', 'b', 'c'])).to.equal('You just got c to your collection in which a, b, c are taking part!');

            expect(movies.buyMovie('d', ['a', 'a'])).to.equal('You just got d to your collection in which a are taking part!');

        });

        it('Should return a correct value when movie is in the collection', () => {

            const movies = new ChristmasMovies();

            expect(movies.buyMovie('a', ['a'])).to.equal('You just got a to your collection in which a are taking part!');

            expect(() => movies.buyMovie('a', ['a'])).to.throw(Error, 'You already own a in your collection!');

        });

    });

    describe('Check the discardMovie method', () => {

        it('Should return a correct value when the movie is not in the collection', () => {

            const movies = new ChristmasMovies();

            expect(() => movies.discardMovie('a')).to.throw(Error, 'a is not at your collection!');

        });

        it('Should return a correct value when the movie is in the collection but not in the watched list', () => {

            const movies = new ChristmasMovies();

            movies.buyMovie('a', ['a']);

            expect(() => movies.discardMovie('a')).to.throw(Error, 'a is not watched');

        });

        it('Should return a correct value when the movie is in the collection and in the watched list', () => {

            const movies = new ChristmasMovies();

            movies.buyMovie('a', ['a']);

            movies.watchMovie('a');

            expect(movies.discardMovie('a')).to.equal('You just threw away a!');

            expect(movies.movieCollection).to.have.lengthOf('0')

            movies.buyMovie('b', ['b']);

            movies.buyMovie('c', ['c']);

            movies.watchMovie('c');

            movies.discardMovie('c');

            expect(movies.movieCollection).to.have.lengthOf('1');

        });

    });

    describe('Check the watchMovie method', () => {

        it('Should retrun a correct value with a valid input', () => {

            const movies = new ChristmasMovies();

            movies.buyMovie('a', ['a']);

            movies.watchMovie('a');

            expect(movies.watched['a']).to.equal(1);

            movies.watchMovie('a');

            expect(movies.watched['a']).to.equal(2);

        });

        it('Should retrun a correct value with an invalid input', () => {

            const movies = new ChristmasMovies();

            expect(() => movies.watchMovie('a')).to.throw(Error, 'No such movie in your collection!');

        });

    });

    describe('Check the favouriteMovie method', () => {

        it('Should return a correct value with a valid input', () => {

            const movies = new ChristmasMovies();

            movies.buyMovie('a', ['a']);

            movies.buyMovie('b', ['b']);

            movies.watchMovie('a');

            movies.watchMovie('a');

            movies.watchMovie('b');

            expect(movies.favouriteMovie()).to.equal('Your favourite movie is a and you have watched it 2 times!');

        });

        it('Should return a correct value with an invalid input', () => {

            const movies = new ChristmasMovies();

            expect(() => movies.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');

        });

    });

    describe('Check the mostStarredActor method', () => {

        it('Should return a correct value with a valid input', () => {

            const movies = new ChristmasMovies();

            movies.buyMovie('a', ['a']);

            movies.buyMovie('b', ['a']);

            movies.buyMovie('c', ['b']);

            expect(movies.mostStarredActor()).to.equal('The most starred actor is a and starred in 2 movies!');

        });

        it('Should return a correct value with an invalid input', () => {

            const movies = new ChristmasMovies();

            expect(() => movies.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');

        });

    });

});