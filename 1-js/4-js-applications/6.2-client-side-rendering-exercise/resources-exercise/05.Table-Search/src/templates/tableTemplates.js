import { html } from '../../node_modules/lit-html/lit-html.js';

export const tableRowElTemplate = (student, select) => html`
    <tr class="${select ? 'select' : ''}">
        <td>${student.firstName} ${student.lastName}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>
    </tr>
`;