export function getDOMElements() {

    const divElNotification = document.querySelector('.notification');

    const spanElMsg = document.querySelector('span');

    const aElmnts = document.querySelectorAll('nav a');

    const divElUser = document.querySelector('.user');

    const divElGuest = document.querySelector('.guest');

    const spanEl = document.querySelector('#welcome-msg');

    const mainEl = document.querySelector('main');

    return {
        divElNotification,
        spanElMsg,
        aElmnts,
        divElUser,
        divElGuest,
        spanEl,
        mainEl
    };

}