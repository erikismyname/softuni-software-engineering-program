import { urls } from '../config/urls.js';
import { getRequest, postRequest } from '../api/api.js';

async function loginUser(email, password) {

    const response = await postRequest(urls.users + '/login', { email, password });

    sessionStorage.setItem('userToken', response.accessToken);

    sessionStorage.setItem('userEmail', response.email);

    sessionStorage.setItem('userId', response._id);

}

async function logoutUser() {

    await getRequest(urls.users + '/logout');

    sessionStorage.removeItem('userToken');

    sessionStorage.removeItem('userEmail');

    sessionStorage.removeItem('userId');

}

async function registerUser(email, password) {

    const response = await postRequest(urls.users + '/register', { email, password });

    sessionStorage.setItem('userToken', response.accessToken);

    sessionStorage.setItem('userEmail', response.email);

    sessionStorage.setItem('userId', response._id);

}

export { loginUser, logoutUser, registerUser };