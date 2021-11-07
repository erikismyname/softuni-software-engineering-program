async function request(url, options) {

    try {

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

    } catch (err) {

        alert(err);

        throw err;

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

async function postRequest(url, body) {

    return await request(url, getRequestOptions('POST', body));

}

async function putRequest(url, body) {

    return await request(url, getRequestOptions('PUT', body));

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