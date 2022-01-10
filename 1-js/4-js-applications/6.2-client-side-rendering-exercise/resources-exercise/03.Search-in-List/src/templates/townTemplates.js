import { html } from '../../node_modules/lit-html/lit-html.js';

const liElTemplate = (town, value) => html`
    <li class="${value && town.toLowerCase().includes(value.toLowerCase()) ? 'active' : ''}">${town}</li>
`;

export const ulElTemplate = (towns, value) => html`
    <ul>
        ${towns.map(t => liElTemplate(t, value))}
    </ul>
`;