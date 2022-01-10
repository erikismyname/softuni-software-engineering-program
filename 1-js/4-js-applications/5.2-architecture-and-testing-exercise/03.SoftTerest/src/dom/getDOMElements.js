export function getDOMElements() {

    const mainEl = document.querySelector('main');

    const aElLogOut = document.querySelector('#logout-btn');

    const navEl = document.querySelector('nav');

    const liElmnts = document.querySelectorAll('li');
    
    const liElmntsUser = document.querySelectorAll('li.user');
    
    const liElmntsGuest = document.querySelectorAll('li.guest');


    return {
        mainEl,
        aElLogOut,
        navEl,
        liElmnts,
        liElmntsUser,
        liElmntsGuest,
    };

}