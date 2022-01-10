import { getDOMElements } from './dom/getElements.js';
import { validateInputs } from './util/validateInputs.js';
import { trimInputs } from './util/trimInputs.js';
import { clearInputs } from './util/clearInputs.js';
import { url } from './config/url.js';
import { makeARequest } from './api/makeARequest.js';
import { displayMessages } from './dom/displayMessages.js';

attachEventListeners();

function attachEventListeners() {

    document.querySelector('#submit').addEventListener('click', onSend);

    document.querySelector('#refresh').addEventListener('click', onRefresh);

}

async function onSend() {

    const { inputElAuthor, inputElMsg } = getDOMElements();

    if (!validateInputs(inputElAuthor, inputElMsg)) {

        alert('Would you kindly enter both an author and a message?');

        return;

    }

    const [author, msg] = trimInputs(inputElAuthor, inputElMsg);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            author,
            content: msg,
        }),
    };

    clearInputs(inputElAuthor, inputElMsg);

    try {

        await makeARequest(url, options);

        alert('Message sent successfully!');

    } catch (err) {

        alert(err);
        
    }

}

async function onRefresh() {

    try {

        const messagesData = await makeARequest(url);

        displayMessages(messagesData);

    } catch (err) {

        alert(err);

    }

}