import { getDOMElements, renderWeatherData } from './dom.js';
import { validateInput, transformInput } from './util.js';
import * as api from './api.js';

attachEventListener();

function attachEventListener() {

    document.querySelector('#submit').addEventListener('click', onGetWeather);

}

async function onGetWeather() {

    const { inputEl } = getDOMElements();

    const inputTown = transformInput(inputEl.value);

    if (!validateInput(inputTown)) {

        alert('The town entered is invalid! Please enter one of the following: New York, London or Barcelona!');

        return;

    }

    try {

        const weatherInfo = await api.getWeatherCode(inputTown);
        
        const [currWeatherInfo, upcWeatherInfo] = await Promise.all([
            
            api.getCurrentWeather(weatherInfo.code),
            
            api.getUpcomingWeather(weatherInfo.code),
            
        ]);

        renderWeatherData(currWeatherInfo, upcWeatherInfo);
        
    } catch (err) {
        
        alert(err);
        
    }

}