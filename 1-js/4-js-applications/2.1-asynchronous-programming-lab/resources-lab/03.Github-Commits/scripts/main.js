import { getCommitsData } from './api.js';

import { renderCommitMessages } from './dom.js';

attachEventListener();

function attachEventListener() {

    document.querySelector('button').addEventListener('click', onLoad);

}

async function onLoad() {

    const commitsData = await getCommitsData();

    renderCommitMessages(commitsData);

}