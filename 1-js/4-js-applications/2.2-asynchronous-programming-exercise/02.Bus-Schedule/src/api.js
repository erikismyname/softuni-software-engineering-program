export async function getStopInfo(stopId) {

    const url = 'http://localhost:3030/jsonstore/bus/schedule/' + stopId;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}