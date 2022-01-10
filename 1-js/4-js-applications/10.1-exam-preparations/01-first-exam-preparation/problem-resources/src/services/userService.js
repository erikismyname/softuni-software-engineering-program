import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function logUserIn(userData) {

    const response = await api.postRequest(urls.users + '/login', userData);

    addUserDataToSessionStorage(response);

}

async function logUserOut() {

    await api.getRequest(urls.users + '/logout');

    removeUserDataFromSessionStorage();

}

async function registerUser(userData) {

    const response = await api.postRequest(urls.users + '/register', userData);

    addUserDataToSessionStorage(response);

}

function addUserDataToSessionStorage(userData) {

    sessionStorage.setItem('userToken', userData.accessToken);

    sessionStorage.setItem('username', userData.username);

    sessionStorage.setItem('userEmail', userData.email);

    sessionStorage.setItem('userId', userData._id);

    sessionStorage.setItem('userGender', userData.gender);

}

function removeUserDataFromSessionStorage() {

    sessionStorage.removeItem('userToken');

    sessionStorage.removeItem('username');

    sessionStorage.removeItem('userEmail');

    sessionStorage.removeItem('userId');

    sessionStorage.removeItem('userGender');

}

export {
    logUserIn,
    logUserOut,
    registerUser,
};