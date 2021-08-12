function encodeAndDecodeMessages() {

    const [inputTextArea, resultTextArea] = document.querySelectorAll('textarea');

    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');

    encodeBtn.addEventListener('click', encodeAndSend);

    decodeBtn.addEventListener('click', decodeAndRead);

    function encodeAndSend() {

        resultTextArea.value = inputTextArea.value.split('').map(e => e.charCodeAt()).map(e => e + 1).map(e => String.fromCharCode(e)).join('');

        inputTextArea.value = '';

    }

    function decodeAndRead() {

        resultTextArea.value = resultTextArea.value.split('').map(e => e.charCodeAt()).map(e => e - 1).map(e => String.fromCharCode(e)).join('');

    }

}