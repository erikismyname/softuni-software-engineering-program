import { getDOMElements } from './dom.js';

import { validateInput } from './util.js';

export async function getReposData() {

    const { inputEl } = getDOMElements();

    if (!validateInput(inputEl.value)) {

        const msg = 'Please enter a valid username!';

        alert(msg);

        throw new Error(msg);

    }

    const url = `https://api.github.com/users/${inputEl.value}/repos`;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        alert(error.message);

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}