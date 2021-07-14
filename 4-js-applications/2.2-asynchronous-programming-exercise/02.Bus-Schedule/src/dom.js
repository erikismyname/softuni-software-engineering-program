import { getStopInfo } from './api.js';

function getDOMElements() {

    const spanElStopName = document.querySelector('span');

    const btnElDepart = document.querySelector('#depart');

    const btnElArrive = document.querySelector('#arrive');

    return {

        spanElStopName,

        btnElDepart,

        btnElArrive,

    };

}

const travelData = {

    name: null,

    next: 'depot',

};

async function onDepart(ev) {

    const { btnElArrive, spanElStopName } = getDOMElements();

    try {

        const { name: currStopName, next: nextStopId } = await getStopInfo(travelData.next);

        travelData.name = currStopName;

        travelData.next = nextStopId;

        spanElStopName.textContent = `Next stop - ${currStopName}`;

        ev.target.disabled = true;

        btnElArrive.disabled = false;

    } catch (err) {

        ev.target.disabled = true;

        btnElArrive.disabled = true;

        alert(err);

    }

}

async function onArrive(ev) {

    const { btnElDepart, spanElStopName } = getDOMElements();

    spanElStopName.textContent = `Now arriving at ${travelData.name}`;

    ev.target.disabled = true;

    btnElDepart.disabled = false;

}

export { getDOMElements, onDepart, onArrive };