import { getDOMElements } from './getElements.js';
import { appendChildrenToParent, removeChildrenFromParent } from './appendAndRemove.js';
import { createElement } from './createElement.js';

export function displayStudentsData(students) {

    const { tblBody } = getDOMElements();

    const domFragment = document.createDocumentFragment();

    Object.values(students)
        .map(createTableRow)
        .forEach(r => domFragment.appendChild(r));

    removeChildrenFromParent(tblBody);

    tblBody.appendChild(domFragment);

}

function createTableRow(student) {

    return appendChildrenToParent(createElement('tr'), createElement('td', student.firstName), createElement('td', student.lastName), createElement('td', student.facultyNumber), createElement('td', student.grade));

}