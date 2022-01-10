import { html } from '../../node_modules/lit-html/lit-html.js';

import {carTemplate} from './common/carTemplate.js';
import { filterCars } from '../services/carService.js';

const searchPageTemplate = (cars, onCarSearch) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onCarSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${cars.length
            ? cars.map(carTemplate)
            : html`<p class="no-cars"> No results.</p>`
        }
    </div>
</section>
`;

export async function renderSearchPage(ctx) {

    const year = Number(ctx.querystring.split('=')[1]);

    const cars = isNaN(year) ? [] : await filterCars(year);

    ctx.render(searchPageTemplate(cars, onCarSearch, year));

    function onCarSearch(ev) {

        const inputValue = ev.target.previousElementSibling.value;

        if (!isNaN(inputValue)) {

            ctx.page.redirect('/search?query=' + inputValue);

        } else {

            alert('The search option works only with numbers!');

        }

    }

}