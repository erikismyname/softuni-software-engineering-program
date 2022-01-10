import { getDOMElements } from './dom.js';
import { getInputValue, validateInputValue } from './util.js';

// A function that fetches the needed data from a remote server.
export async function getStopData() {

    const { inputElStopId } = getDOMElements();

    const stopId = getInputValue(inputElStopId);

    if (!stopId || !validateInputValue(stopId)) {

        const msg = !stopId ? 'The input value cannot be an empty string!' : 'Invalid stop ID! Please enter one of the following: 1287, 1308, 1327 or 2334!'

        throw new Error(msg);

    }

    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopId;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        alert(error.message);

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}