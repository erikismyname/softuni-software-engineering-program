async function request(url, options) {

    const response = await fetch(url, options);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    try {

        const data = await response.json();

        return data;

    } catch (err) {

        return response;

    }

}

function getRequestOptions(method = 'GET', body) {

    const options = {
        method,
        headers: {},
    };

    const userToken = sessionStorage.getItem('userToken');

    if (userToken) {

        options.headers['X-Authorization'] = userToken;

    }

    if (body) {

        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(body);

    }

    return options;

}

async function getRequest(url) {

    return await request(url, getRequestOptions());

}

async function postRequest(url, data) {

    return await request(url, getRequestOptions('POST', data));

}

async function putRequest(url, data) {

    return await request(url, getRequestOptions('PUT', data));

}

async function deleteRequest(url) {

    return await request(url, getRequestOptions('DELETE'));

}

export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
};