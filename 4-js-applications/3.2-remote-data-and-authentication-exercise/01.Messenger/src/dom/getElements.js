export function getDOMElements() {

    const textArea = document.querySelector('#messages');

    const inputElAuthor = document.querySelector('input[name="author"]');

    const inputElMsg = document.querySelector('input[name="content"]');

    return {
        textArea,
        inputElAuthor,
        inputElMsg,
    };

}