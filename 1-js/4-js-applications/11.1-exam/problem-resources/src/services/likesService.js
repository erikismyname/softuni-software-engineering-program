import { getRequest, postRequest } from '../api/api.js';
import { urls } from '../config/urls.js';

async function likeABook(bookData) {

    return await postRequest(urls.likes, bookData);

}

async function getBookLikes(bookId) {

    const query = `?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`;

    return await getRequest(urls.likes + query);

}

async function getUserLike(bookId, userId) {

    const query = `?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`;

    return await getRequest(urls.likes + query);

}

export {
    likeABook,
    getBookLikes,
    getUserLike,
};