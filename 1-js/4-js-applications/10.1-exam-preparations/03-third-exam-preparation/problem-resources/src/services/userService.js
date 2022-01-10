import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function logUserIn(userData) {

    const response = await api.postRequest(urls.users + '/login', userData);

    saveUserData(response);

}

async function logUserOut() {

    await api.getRequest(urls.users + '/logout');

    deleteUserData();

}

async function registerUser(userData) {

    const response = await api.postRequest(urls.users + '/register', userData);

    saveUserData(response);

}

function saveUserData(userData) {

    sessionStorage.setItem('userToken', userData.accessToken);

    sessionStorage.setItem('userEmail', userData.email);

    sessionStorage.setItem('userId', userData._id);

}

function deleteUserData() {

    sessionStorage.removeItem('userToken');

    sessionStorage.removeItem('userEmail');

    sessionStorage.removeItem('userId');

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