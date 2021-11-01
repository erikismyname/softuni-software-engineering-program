import { getDOMElements } from './dom/getDOMElements.js';
import { getTableData } from './service/tableService.js';
import { tableRowElTemplate } from './templates/tableTemplates.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { checkForMatch } from './util/checkForMatch.js';

onApplicationStart();

let tableData;

async function onApplicationStart() {

    attachEventListener();

    try {

        tableData = await getTableData();

        renderTableData(tableData);

    } catch (err) {

        alert(err);

    }

}

function attachEventListener() {

    const { btnEl } = getDOMElements();

    btnEl.addEventListener('click', onSearch);

}

function onSearch() {

    const { inputEl } = getDOMElements();

    renderTableData(tableData, inputEl.value.trim());

    inputEl.value = '';

}

function renderTableData(tableData, value = '') {

    const { tableBodyEl } = getDOMElements();

    const mappedData = tableData.map(e => tableRowElTemplate(e, checkForMatch(e, value)));

    render(mappedData, tableBodyEl);

}