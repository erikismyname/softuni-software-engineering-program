export function getDOMElements() {

    const tblBody = document.querySelector('tbody');

    const btnElLoad = document.querySelector('#load');

    const formEl = document.querySelector('#form');

    return {
        tblBody,
        btnElLoad,
        formEl,
    };

}