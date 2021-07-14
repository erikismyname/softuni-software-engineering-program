async function getWeatherCode(town) {

    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data.find(o => o.name.toLowerCase() == town);

}

async function getCurrentWeather(townCode) {

    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + townCode;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}

async function getUpcomingWeather(townCode) {

    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + townCode;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}

export { getWeatherCode, getCurrentWeather, getUpcomingWeather };