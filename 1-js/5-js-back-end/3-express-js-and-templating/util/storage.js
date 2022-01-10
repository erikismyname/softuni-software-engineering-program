const fs = require('fs/promises');

let data = {};

async function init() {

    data = JSON.parse(await fs.readFile('./data/books.json'));

    return (req, res, next) => {

        req.storage = {
            getAllBooks,
            getSingleBook,
            createBook,
        };

        next();

    };

}

function getAllBooks() {

    return Object
        .entries(data)
        .map(([id, book]) => ({
            id,
            title: book.title,
            author: book.author,
        }));

}

function getSingleBook(bookId) {

    return data[bookId];

}

async function createBook(bookData) {

    data[nextId()] = {
        title: bookData.name,
        author: bookData.author,
    };

    fs.writeFile('./data/books.json', JSON.stringify(data));

}

function nextId() {

    let previousId = Object.keys(data).slice(-1);

    let currentId = Number(previousId) + 1;

    return currentId;

}

module.exports = init;