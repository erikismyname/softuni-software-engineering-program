export function getDOMElements() {

    const divElGuest = document.querySelector('#guest');

    const divElUser = document.querySelector('#user');

    const spanElMsg = document.querySelector('#welcome-msg');

    const mainEl = document.querySelector('#site-content');

    return {
        divElGuest,
        divElUser,
        spanElMsg,
        mainEl
    };

}