import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function logUserIn(userData) {

    const response = await api.postRequest(urls.users + '/login', userData);

    saveUserData(response);

    return response;

}

async function logUserOut() {

    const response = await api.getRequest(urls.users + '/logout');

    deleteUserData();

    return response;

}

async function registerUser(userData) {

    const response = await api.postRequest(urls.users + '/register', userData);

    saveUserData(response);

    return response;

}

function saveUserData(userData) {

    sessionStorage.setItem('userToken', userData.accessToken);

    sessionStorage.setItem('userId', userData._id);

    sessionStorage.setItem('userEmail', userData.email);

}

function deleteUserData() {

    sessionStorage.removeItem('userToken');

    sessionStorage.removeItem('userId');

    sessionStorage.removeItem('userEmail');

}

function getUserData(dataType) {

    return sessionStorage.getItem(dataType);

}

export {
    logUserIn,
    logUserOut,
    registerUser,
    getUserData,
};