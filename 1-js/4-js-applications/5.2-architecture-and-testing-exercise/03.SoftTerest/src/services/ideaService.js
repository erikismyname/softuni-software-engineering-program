import { urls } from '../config/urls.js';
import { getRequest, postRequest, putRequest, deleteRequest } from '../api/api.js';

async function getIdeas() {

    const response = await getRequest(urls.ideas + '?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');

    return response;

}

async function getIdea(id) {

    const response = await getRequest(urls.ideas + '/' + id);

    return response;

}

async function createIdea(data) {

    const response = await postRequest(urls.ideas, data);

    return response;

}

async function updateIdea(id, data) {

    const response = await putRequest(urls.ideas + '/' + id, data);

    return response;

}

async function deleteIdea(id) {

    const response = await deleteRequest(urls.ideas + '/' + id);

    return response;

}

export { getIdeas, getIdea, createIdea, updateIdea, deleteIdea };