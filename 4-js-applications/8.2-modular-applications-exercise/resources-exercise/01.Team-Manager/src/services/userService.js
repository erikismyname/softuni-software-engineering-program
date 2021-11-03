import { getRequest, postRequest } from '../api/api.js';
import { urls } from '../config/urls.js';

async function logInUser(userData) {

    const response = await postRequest(urls.users + '/login', userData);

    sessionStorage.setItem('userToken', response.accessToken);

    sessionStorage.setItem('username', response.username);

    sessionStorage.setItem('userEmail', response.email);

    sessionStorage.setItem('userId', response._id);

}

async function logOutUser() {

    await getRequest(urls.users + '/logout');

    sessionStorage.removeItem('userToken');

    sessionStorage.removeItem('username');

    sessionStorage.removeItem('userEmail');

    sessionStorage.removeItem('userId');

}

async function registerUser(userData) {

    const response = await postRequest(urls.users + '/register', userData);

    sessionStorage.setItem('userToken', response.accessToken);

    sessionStorage.setItem('username', response.username);

    sessionStorage.setItem('userEmail', response.email);

    sessionStorage.setItem('userId', response._id);

}

export { logInUser, logOutUser, registerUser };