import page from '../node_modules/page/page.mjs';

import { decorateContext } from './middlewares/decorateContext.js';

import { logUserOut } from './services/userService.js';

import { renderHomePage } from './views/home.js';
import { renderLogInPage } from './views/login.js';
import { renderRegisterView } from './views/register.js';
import { renderCatalogPage } from './views/catalog.js';
import { renderCreatePage } from './views/create.js';
import { renderDetailsPage } from './views/details.js';
import { renderEditPage } from './views/edit.js';
import { renderProfilePage } from './views/profile.js';
import { renderSearchPage } from './views/search.js';

onApplicationStart();

function onApplicationStart() {

    page(decorateContext);

    page('/', '/home');
    page('/index.html', '/home');

    page('/home', renderHomePage);
    page('/login', renderLogInPage);
    page('/register', renderRegisterView);
    page('/catalog', renderCatalogPage);
    page('/create', renderCreatePage);
    page('/details/:id', renderDetailsPage);
    page('/edit/:id', renderEditPage);
    page('/profile', renderProfilePage);
    page('/search', renderSearchPage);

    page.start();

    attachEventListener();

}


function attachEventListener() {

    document.querySelector('#logout-btn').addEventListener('click', async () => {

        await logUserOut();

        page.redirect('/home');

    });

}