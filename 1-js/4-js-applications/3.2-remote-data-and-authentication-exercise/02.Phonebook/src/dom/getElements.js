export function getDOMElements() {

    const ulElPhonebook = document.querySelector('#phonebook');

    const inputElPerson = document.querySelector('#person');

    const inputElPhone = document.querySelector('#phone');

    const btnElLoad = document.querySelector('#btnLoad');

    const btnElCreate = document.querySelector('#btnCreate');

    return {
        ulElPhonebook,
        inputElPerson,
        inputElPhone,
        btnElLoad,
        btnElCreate,
    };

}