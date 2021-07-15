import { getDOMElements } from './getElements.js';

export function displayMessages(messages) {

    const { textArea } = getDOMElements();

    const messagesStorage = [];

    Object.values(messages)
        .map(m => `${m.author}: ${m.content}`)
        .forEach(m => messagesStorage.push(m));

    textArea.value = messagesStorage.join('\n');

}