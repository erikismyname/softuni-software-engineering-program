async function request(url, options) {

    const response = await fetch(url, options);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}

function getOptions(method = 'GET', body) {

    const options = {
        method,
        headers: {},
    };

    if (body) {

        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(body);

    }

    return options;

}

async function getRequest(url) {

    return await request(url, getOptions());

}

async function postRequest(url, data) {

    return await request(url, getOptions('POST', data));

}

export { getRequest, postRequest };