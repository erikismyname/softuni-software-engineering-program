import { urls } from '../config/urls.js';
import { getRequest, postRequest, putRequest, deleteRequest } from '../api/api.js';

async function getAllFurniture() {

    const response = await getRequest(urls.furniture);

    return response;

}

async function getOneFurniture(id) {

    const response = await getRequest(urls.furniture + `/${id}`);

    return response;

}

async function getMyFurniture() {

    const userId = sessionStorage.getItem('userId');

    const response = await getRequest(urls.furniture + `?where=_ownerId%3D%22${userId}%22`);

    return response;

}

async function createFurniture(data) {

    const response = await postRequest(urls.furniture, data);

    return response;

}

async function updateFurniture(id, data) {

    const response = await putRequest(urls.furniture + `/${id}`, data);

    return response;

}

async function deleteFurniture(id) {

    const response = await deleteRequest(urls.furniture + `/${id}`);

    return response;

}

export {
    getAllFurniture,
    getOneFurniture,
    getMyFurniture,
    createFurniture,
    updateFurniture,
    deleteFurniture,
};