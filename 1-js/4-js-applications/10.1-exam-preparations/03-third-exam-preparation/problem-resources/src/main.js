import page from '../node_modules/page/page.mjs';

import { decorateContext } from './middlewares/decorateContext.js';
import { logUserOut } from './services/userService.js';

import { renderLogInPage } from './views/logIn.js';
import { renderRegisterPage } from './views/register.js';
import { renderHomePage } from './views/home.js';
import { renderCatalogPage } from './views/catalog.js';
import { renderCreatePage } from './views/create.js';
import { renderDetailsPage } from './views/details.js';
import { renderEditPage } from './views/edit.js';
import { renderSearchPage } from './views/search.js';

onApplicationStart();

function onApplicationStart() {

    attachEventListener();

    page(decorateContext);

    page('/', '/home');
    page('/index.html', '/home');

    page('/login', renderLogInPage);
    page('/register', renderRegisterPage);
    page('/home', renderHomePage);
    page('/catalog', renderCatalogPage);
    page('/create', renderCreatePage);
    page('/details/:id', renderDetailsPage);
    page('/edit/:id', renderEditPage);
    page('/search', renderSearchPage);

    page.start();

}

function attachEventListener() {

    document.querySelector('#logout-btn').addEventListener('click', async () => {

        await logUserOut();

        page.redirect('/home');

    });

}