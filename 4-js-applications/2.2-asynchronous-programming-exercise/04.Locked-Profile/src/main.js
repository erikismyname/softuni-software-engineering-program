import { getProfilesData } from './api.js';
import { createProfileCards, getMainElement } from './dom.js';

displayProfileCards();

async function displayProfileCards() {

    const mainEl = getMainElement();

    const domFragment = document.createDocumentFragment();

    try {

        const profileCardsData = await getProfilesData();

        const cards = createProfileCards(profileCardsData);

        domFragment.append(...cards);

        mainEl.appendChild(domFragment);

    } catch (err) {

        alert(err);

    }

}