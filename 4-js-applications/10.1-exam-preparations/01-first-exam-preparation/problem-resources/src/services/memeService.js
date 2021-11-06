import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function getAllMemes() {

    const query = '?sortBy=_createdOn%20desc';

    const response = await api.getRequest(urls.memes + query);

    return response;

}

async function getOneMeme(memeId) {

    const response = await api.getRequest(urls.memes + `/${memeId}`);

    return response;

}

async function getMyMemes() {

    const userId = sessionStorage.getItem('userId');

    const query = `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;

    const response = await api.getRequest(urls.memes + query);

    return response;

}

async function createMeme(memeData) {

    const response = await api.postRequest(urls.memes, memeData);

    return response;

}

async function updateMeme(memeId, memeData) {

    const response = await api.putRequest(urls.memes + `/${memeId}`, memeData);

    return response;

}

async function deleteMeme(memeId) {

    const response = await api.deleteRequest(urls.memes + `/${memeId}`);

    return response;

}

export {
    getAllMemes,
    getOneMeme,
    getMyMemes,
    createMeme,
    updateMeme,
    deleteMeme,
};