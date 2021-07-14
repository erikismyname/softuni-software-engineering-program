// A function that receives an input HTML element, gets its value, trims it and then returns it.
function getInputValue(inputEl) {

    return inputEl.value.trim();

}

// A function that receives an input value (stop ID), checks whether it is valid and returns a boolean value based on that. 
function validateInputValue(stopId) {

    const validStops = ['1287', '1308', '1327', '2334'];

    return validStops.includes(stopId);

}

// A function that receives an input HTML element and clears its value.
function clearInputValue(inputEl) {

    inputEl.value = '';

}

export { getInputValue, validateInputValue, clearInputValue };