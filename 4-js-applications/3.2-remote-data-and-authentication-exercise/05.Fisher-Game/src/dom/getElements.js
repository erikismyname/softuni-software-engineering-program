export function getDOMElements() {

    const mainEl = document.querySelector('main');

    const aElmnts = document.querySelectorAll('nav a');

    const divElUser = document.querySelector('.user-view');

    const divElGuest = document.querySelector('.guest-view');

    const spanElName = document.querySelector('span');

    const fieldsetEl = document.querySelector('#main');

    const divElCatches = document.querySelector('#catches');

    return {
        mainEl,
        aElmnts,
        divElUser,
        divElGuest,
        spanElName,
        fieldsetEl,
        divElCatches,
    };

}