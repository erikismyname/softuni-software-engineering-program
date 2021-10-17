import { getReposData } from './api.js';

import { renderReposData } from './dom.js';

attachEventListener();

function attachEventListener() {

	document.querySelector('button').addEventListener('click', onLoad);

}

async function onLoad() {

	const reposData = await getReposData();

	renderReposData(reposData);

}