export function getDOMElements() {

    const divElGuest = document.querySelector('#guest');

    const divElUser = document.querySelector('#profile');

    const aElWelcome = document.querySelector('#welcome-msg');

    const mainEl = document.querySelector('#site-content');

    return {
        divElGuest,
        divElUser,
        aElWelcome,
        mainEl,
    };

}