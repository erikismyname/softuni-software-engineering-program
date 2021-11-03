export function getDOMElements() {

    const mainEl = document.querySelector('main');

    const aElmntsGuest = document.querySelectorAll('nav > a.guest');

    const aElmntsUser = document.querySelectorAll('nav > a.user');

    const aElLogout = document.querySelector('#logout-btn');

    return {
        mainEl,
        aElmntsGuest,
        aElmntsUser,
        aElLogout,
    };

}