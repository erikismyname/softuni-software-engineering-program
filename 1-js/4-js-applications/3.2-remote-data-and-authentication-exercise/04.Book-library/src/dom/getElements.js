export function getDOMElements() {

    const btnElLoad = document.querySelector('#loadBooks');

    const tableEl = document.querySelector('table');

    const tblBodyEl = document.querySelector('tbody');

    const formElCreate = document.querySelector('#create');

    const formElEdit = document.querySelector('#edit');

    const btnElCancel = document.querySelector('#cancel');

    return {
        btnElLoad,
        tableEl,
        tblBodyEl,
        formElCreate,
        formElEdit,
        btnElCancel,
    };

}