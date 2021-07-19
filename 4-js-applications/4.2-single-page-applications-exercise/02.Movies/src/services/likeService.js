import { urls } from '../config/urls.js';
import { getRequest, postRequest, deleteRequest } from '../api/api.js';

async function getMovieLikes(movieId) {

    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`;

    const response = await getRequest(url);

    return response;

}

async function getUserLike(movieId) {

    const userId = sessionStorage.getItem('userId');

    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;

    const response = await getRequest(url);

    return response;

}

async function addLike(data) {

    const response = await postRequest(urls.likes, data);

    return response;

}

async function revokeLike(id) {

    const response = await deleteRequest(urls.likes + id);

    return response;

}

export { getMovieLikes, getUserLike, addLike, revokeLike };