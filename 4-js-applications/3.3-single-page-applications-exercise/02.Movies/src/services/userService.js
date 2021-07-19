import { urls } from '../config/urls.js';
import { getRequest, postRequest } from '../api/api.js';

async function logUserIn(email, password) {

    const response = await postRequest(urls.users + 'login', { email, password });

    sessionStorage.setItem('authToken', response.accessToken);

    sessionStorage.setItem('userId', response._id);

    sessionStorage.setItem('userEmail', response.email);

}

async function logUserOut() {

    await getRequest(urls.users + 'logout');

    sessionStorage.removeItem('authToken');

    sessionStorage.removeItem('userId');

    sessionStorage.removeItem('userEmail');

}

async function registerUser(email, password) {

    const response = await postRequest(urls.users + 'register', { email, password });

    sessionStorage.setItem('authToken', response.accessToken);

    sessionStorage.setItem('userId', response._id);

    sessionStorage.setItem('userEmail', response.email);

}

export { logUserIn, logUserOut, registerUser };