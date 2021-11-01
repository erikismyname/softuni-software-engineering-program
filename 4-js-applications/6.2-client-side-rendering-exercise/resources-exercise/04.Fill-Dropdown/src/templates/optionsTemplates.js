import { html } from '../../node_modules/lit-html/lit-html.js';

const optionElTemplate = option => html`
    <option value="${option._id}">${option.text}</option>
`;

 export const selectElTemplate = options => html`
    <select id="menu">
        ${options.map(optionElTemplate)}
    </select>
`;