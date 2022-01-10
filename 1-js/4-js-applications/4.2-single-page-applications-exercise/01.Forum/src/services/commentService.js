import { urls } from '../config/urls.js';
import { getRequest, postRequest } from '../api/api.js';

async function getComments() {

    const response = await getRequest(urls.comments);

    return response;

}

async function createComment(data) {

    const response = await postRequest(urls.comments, data);

    return response;

}

export { getComments, createComment };