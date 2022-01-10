import { url } from '../config/url.js';
import { getRequest, postRequest } from '../api/api.js';

async function getOptions() {

    const response = await getRequest(url);

    return Object.values(response);

}

async function createOption(data) {

    const response = await postRequest(url, data);

    return response;

}

export { getOptions, createOption };