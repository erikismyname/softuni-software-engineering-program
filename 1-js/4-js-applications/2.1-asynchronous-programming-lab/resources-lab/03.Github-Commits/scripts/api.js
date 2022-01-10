import { getDOMElements } from './dom.js';

import { validateInputs } from './util.js';

export async function getCommitsData() {

    const { inputElUsrnm, inputElRepo } = getDOMElements();

    if (!validateInputs(inputElUsrnm.value, inputElRepo.value)) {

        const msg = 'Both inputs should be valid!';

        alert(msg);

        throw new Error(msg);

    }

    const url = `https://api.github.com/repos/${inputElUsrnm.value}/${inputElRepo.value}/commits`;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        alert(error.message);

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}