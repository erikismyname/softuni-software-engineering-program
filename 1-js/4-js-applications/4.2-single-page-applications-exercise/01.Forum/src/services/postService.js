import { urls } from '../config/urls.js';
import { getRequest, postRequest } from '../api/api.js';

async function getPosts() {

    const response = await getRequest(urls.posts);

    return response;

}

async function getPost(id) {

    const response = await getRequest(urls.posts + id);

    return response;

}

async function createPost(data) {

    const response = await postRequest(urls.posts, data);

    return response;

}

export { getPosts, getPost, createPost };