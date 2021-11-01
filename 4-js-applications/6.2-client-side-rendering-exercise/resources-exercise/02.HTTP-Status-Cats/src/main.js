import { getSectionElement } from './dom/getSectionElement.js';
import { cats } from './catSeeder.js';
import { ulTemplate } from './templates/catsTemplates.js';
import { render } from '../node_modules/lit-html/lit-html.js';

onApplicationStart();

function onApplicationStart() {

    const sectionElRoot = getSectionElement();

    render(ulTemplate(cats), sectionElRoot);

}