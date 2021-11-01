import { html } from '../../node_modules/lit-html/lit-html.js';

const liTemplate = cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click="${onShowMoreDetails}" class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

export const ulTemplate = cats => html`
    <ul>
        ${cats.map(liTemplate)}
    </ul>
`;

function onShowMoreDetails(ev) {

    const divElHidden = ev.target.nextElementSibling;

    divElHidden.style.display = divElHidden.style.display == 'none' ? 'block' : 'none';

    ev.target.textContent = ev.target.textContent == 'Show status code' ? 'Hide status code' : 'Show status code';

}