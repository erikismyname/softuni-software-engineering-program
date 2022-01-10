import { getArticlesTitles } from './api.js';
import { createArticlesPreviews, getSectionElement } from './dom.js';

displayArticlesPreviews();

async function displayArticlesPreviews() {

    const sectionEl = getSectionElement();

    const domFragment = document.createDocumentFragment();

    try {

        const articlesTitles = await getArticlesTitles();

        const articlesCards = await createArticlesPreviews(articlesTitles);

        articlesCards.forEach(c => domFragment.appendChild(c));

        sectionEl.appendChild(domFragment);

    } catch (err) {

        alert(err);

    }

}