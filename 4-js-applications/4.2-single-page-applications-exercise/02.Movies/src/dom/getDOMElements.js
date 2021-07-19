export function getDOMElements() {

    const mainEl = document.querySelector('main');

    const navEl = document.querySelector('nav');

    const aElAddMovie = document.querySelector('#create-link');

    const aElLogOut = document.querySelector('#logout-btn');

    const spanElWelcomeMsg = document.querySelector('#welcome-msg');

    const liElmntsUser = document.querySelectorAll('.user');

    const liElmntsGuest = document.querySelectorAll('.guest');

    return {
        mainEl,
        navEl,
        aElAddMovie,
        aElLogOut,
        spanElWelcomeMsg,
        liElmntsUser,
        liElmntsGuest,
    };

}