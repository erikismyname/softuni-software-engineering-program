import { clearInputValue } from './util.js';

// A function that targets the needed DOM elements and returns them.
function getDOMElements() {

    const inputElStopId = document.querySelector('#stopId');

    const divElStopName = document.querySelector('#stopName');

    const ulElBuses = document.querySelector('#buses');

    return {

        inputElStopId,

        divElStopName,

        ulElBuses,

    };

}

// A function that renders the received remote data on the screen.
function renderStopData(dataObj) {

    const { inputElStopId, divElStopName, ulElBuses } = getDOMElements();

    divElStopName.textContent = dataObj.name;

    const domFragment = document.createDocumentFragment();

    Object.entries(dataObj.buses).forEach(([b, t]) => {

        appendChildrenToParent(domFragment, createElement('li', `Bus ${b} arrives in ${t} minutes`));

    });

    removeChildrenFromParent(ulElBuses);

    appendChildrenToParent(ulElBuses, domFragment);

    clearInputValue(inputElStopId);

}

// A function that simplifies the creation of DOM elements.
function createElement(type, content, attributes) {

    const elmnt = document.createElement(type);

    if (content) {

        elmnt.textContent = content;

    }

    if (attributes) {

        Object.entries(attributes).forEach(([k, v]) => {

            el[k] = v;

        });

    }

    return elmnt;

}

// A function that appends one or more elements to a single parent element. 
function appendChildrenToParent(parent, ...children) {

    parent.append(...children);

    return parent;

}

// A function that removes one or more elements from a single parent element.
function removeChildrenFromParent(parent) {

    [...parent.children].forEach(c => c.remove());

}

export { getDOMElements, renderStopData };