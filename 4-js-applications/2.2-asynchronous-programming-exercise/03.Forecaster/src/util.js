function validateInput(town) {

    const validTowns = ['new york', 'london', 'barcelona'];

    return validTowns.includes(town);

}

function transformInput(town) {

    return town.trim().toLowerCase();

}

function getWeatherSymbol(word) {

    const entities = {

        sunny: '☀',

        'partly sunny': '⛅',

        overcast: '☁',

        rain: '☂',

        degrees: '°',

    };

    return entities[word.toLowerCase()];

}

function clearInputValue(inputEl) {

    inputEl.value = '';

}

export { validateInput, transformInput, getWeatherSymbol, clearInputValue };