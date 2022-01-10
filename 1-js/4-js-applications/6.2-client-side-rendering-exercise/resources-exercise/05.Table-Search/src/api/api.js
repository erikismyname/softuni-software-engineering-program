async function request(url) {

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}

export async function getRequest(url) {

    return await request(url);

}