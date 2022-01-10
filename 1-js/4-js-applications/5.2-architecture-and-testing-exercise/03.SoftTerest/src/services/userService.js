import { urls } from '../config/urls.js';
import { getRequest, postRequest } from '../api/api.js';

async function logUserIn(email, password) {

    const response = await postRequest(urls.users + '/login', { email, password });

    localStorage.setItem('userToken', response.accessToken);

    localStorage.setItem('userEmail', response.email);

    localStorage.setItem('userId', response._id);

}

async function logUserOut() {

    await getRequest(urls.users + '/logout');

    localStorage.removeItem('userToken');

    localStorage.removeItem('userEmail');

    localStorage.removeItem('userId');

}

async function registerUser(email, password) {

    const response = await postRequest(urls.users + '/register', { email, password });

    localStorage.setItem('userToken', response.accessToken);

    localStorage.setItem('userEmail', response.email);

    localStorage.setItem('userId', response._id);

}

export { logUserIn, logUserOut, registerUser };