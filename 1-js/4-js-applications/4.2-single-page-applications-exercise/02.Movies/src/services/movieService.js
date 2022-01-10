import { urls } from '../config/urls.js';
import { getRequest, postRequest, putRequest, deleteRequest } from '../api/api.js';

async function getAllMovies() {

    const response = await getRequest(urls.movies);

    return response;

}

async function getMovie(id) {

    const response = await getRequest(urls.movies + id);

    return response;

}

async function createMovie(data) {

    const response = await postRequest(urls.movies, data);

    return response;

}

async function updateMovie(id, data) {

    const response = await putRequest(urls.movies + id, data);

    return response;

}

async function deleteMovie(id) {

    const response = await deleteRequest(urls.movies + id);

    return response;

}

export { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie };