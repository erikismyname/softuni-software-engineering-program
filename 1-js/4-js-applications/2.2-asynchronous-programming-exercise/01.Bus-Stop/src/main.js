import { getStopData } from './api.js';
import { renderStopData } from './dom.js';

attachEventListener();

// A function that attaches an event listener to a specific DOM element.
function attachEventListener() {

    document.querySelector('#submit').addEventListener('click', onCheck);

}

// A fuction that will be executed when the user clicks on the 'Check' button.
async function onCheck() {

    try {

        const stopData = await getStopData();

        renderStopData(stopData);

    } catch (err) {

        alert(err);

    }

}