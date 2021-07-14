import { clearInputValue, getWeatherSymbol } from './util.js';

export function getDOMElements() {

    const inputEl = document.querySelector('#location');

    const divElForecWrapp = document.querySelector('#forecast');

    const divElCurrForec = document.querySelector('#current');

    const divElUpcForec = document.querySelector('#upcoming');

    return {

        inputEl,

        divElForecWrapp,

        divElCurrForec,

        divElUpcForec,

    };

}

export function renderWeatherData(currWeatherInfo, upcWeatherInfo) {

    const { inputEl, divElForecWrapp, divElCurrForec, divElUpcForec } = getDOMElements();

    if (divElCurrForec.children[1]) {

        divElCurrForec.children[1].remove();

    }

    if (divElUpcForec.children[1]) {

        divElUpcForec.children[1].remove();

    }

    appendChildrenToParent(divElCurrForec, displayCurrentWeather(currWeatherInfo));

    appendChildrenToParent(divElUpcForec, displayUpcomingWeather(upcWeatherInfo));

    divElForecWrapp.style.display = 'block';

    clearInputValue(inputEl);

}

function displayCurrentWeather(currWeatherInfo) {

    const currPlace = currWeatherInfo.name;

    const currCondition = currWeatherInfo.forecast.condition;

    const currHigh = currWeatherInfo.forecast.high;

    const currLow = currWeatherInfo.forecast.low;

    return appendChildrenToParent(createElement('div', '', { className: 'forecasts' }), createElement('span', getWeatherSymbol(currCondition), { className: 'condition symbol' }), appendChildrenToParent(createElement('span', '', { className: 'condition' }), createElement('span', currPlace, { className: 'forecast-data' }), createElement('span', `${currLow}${getWeatherSymbol('degrees')}/${currHigh}${getWeatherSymbol('degrees')}`, { className: 'forecast-data' }), createElement('span', currCondition, { className: 'forecast-data' })));

}

function displayUpcomingWeather(upcWeatherInfo) {

    const divEl = createElement('div', '', { className: 'forecast-info' });

    upcWeatherInfo.forecast.forEach(d => {

        appendChildrenToParent(divEl, appendChildrenToParent(createElement('span', '', { className: 'upcoming' }), createElement('span', getWeatherSymbol(d.condition), { className: 'symbol' }), createElement('span', `${d.low}${getWeatherSymbol('degrees')}/${d.high}${getWeatherSymbol('degrees')}`, { className: 'forecast-data' }), createElement('span', d.condition, { className: 'forecast-data' })));

    });

    return divEl;

}

function createElement(type, content, attributes) {

    const elmnt = document.createElement(type);

    if (content) {

        elmnt.textContent = content;

    }

    if (attributes) {

        Object.entries(attributes).forEach(([k, v]) => {

            elmnt[k] = v;

        });

    }

    return elmnt;

}

function appendChildrenToParent(parent, ...children) {

    parent.append(...children);

    return parent;

}