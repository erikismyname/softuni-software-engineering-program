export function getDOMElements() {

    const divElUser = document.querySelector('#user');

    const divElGuest = document.querySelector('#guest');

    const mainEl = document.querySelector('#main-content');

    return {
        divElUser,
        divElGuest,
        mainEl,
    };

}