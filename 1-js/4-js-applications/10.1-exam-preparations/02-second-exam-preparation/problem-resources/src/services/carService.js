import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function getAllCars() {

    const query = '?sortBy=_createdOn%20desc';

    const response = await api.getRequest(urls.cars + query);

    return response;

}

async function getOneCar(carId) {

    const response = await api.getRequest(urls.cars + `/${carId}`);

    return response;

}

async function getMyCars(userId) {

    const query = `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;

    const response = await api.getRequest(urls.cars + query);

    return response;

}

async function filterCars(year) {

    const query = `?where=year%3D${year}`;

    const response = await api.getRequest(urls.cars + query);

    return response;

}

async function createCar(carData) {

    const response = await api.postRequest(urls.cars, carData);

    return response;

}

async function editCar(carId, carData) {

    const response = await api.putRequest(urls.cars + `/${carId}`, carData);

    return response;

}

async function deleteCar(carId) {

    const response = await api.deleteRequest(urls.cars + `/${carId}`);

    return response;

}

export {
    getAllCars,
    getOneCar,
    getMyCars,
    filterCars,
    createCar,
    editCar,
    deleteCar,
};