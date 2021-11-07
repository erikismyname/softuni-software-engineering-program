import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function getAllBooks() {

    const query = '?sortBy=_createdOn%20desc';

    return await api.getRequest(urls.books + query);

}

async function getOneBook(bookId) {

    return await api.getRequest(urls.books + `/${bookId}`);

}

async function getMyBooks(userId) {

    const query = `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;

    return await api.getRequest(urls.books + query);

}

async function createBook(bookData) {

    return await api.postRequest(urls.books, bookData);

}

async function editBook(bookId, bookData) {

    return await api.putRequest(urls.books + `/${bookId}`, bookData);

}

async function deleteBook(bookId) {

    return await api.deleteRequest(urls.books + `/${bookId}`);

}

export {
    getAllBooks,
    getOneBook,
    getMyBooks,
    createBook,
    editBook,
    deleteBook,
};