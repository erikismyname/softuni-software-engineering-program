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

    sessionStorage.setItem('userId', userData._id);

    sessionStorage.setItem('username', userData.username);

}

function deleteUserData() {

    sessionStorage.removeItem('userToken');

    sessionStorage.removeItem('userId');

    sessionStorage.removeItem('username');

}

function getUserData(dataType) {

    return sessionStorage.getItem(dataType);

}

export {
    logUserIn,
    logUserOut,
    registerUser,
    getUserData
};