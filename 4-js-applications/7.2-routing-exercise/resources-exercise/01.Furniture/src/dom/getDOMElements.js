export function getDOMElements() {

    const divElUser = document.querySelector('#user');

    const divElGuest = document.querySelector('#guest');

    const divElContainer = document.querySelector('.container');

    const btnElLogout = document.querySelector('#logoutBtn');

    const aElmnts = document.querySelectorAll('nav a');

    return {
        divElUser,
        divElGuest,
        divElContainer,
        btnElLogout,
        aElmnts,
    };

}