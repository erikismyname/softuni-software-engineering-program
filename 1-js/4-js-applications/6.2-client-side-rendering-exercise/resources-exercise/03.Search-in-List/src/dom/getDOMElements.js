export function getDOMElements() {

    const divElTowns = document.querySelector('#towns');

    const inputEl = document.querySelector('#searchText');

    const buttonEl = document.querySelector('button');

    const divElResult = document.querySelector('#result');

    return { divElTowns, inputEl, buttonEl, divElResult };

}