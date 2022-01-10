import page from '../node_modules/page/page.mjs';

import { decorateContext } from './middlewares/decorateContext.js';
import { setUserNav } from './views/nav.js';
import { logUserOut } from './services/userService.js';
import { displayHomePage } from './views/home.js';
import { displayLogInPage } from './views/logIn.js';
import { displayRegisterPage } from './views/register.js';
import { displayCatalogPage } from './views/catalog.js';
import { displayCreatePage } from './views/create.js';
import { displayDetailsPage } from './views/details.js';
import { displayEditPage } from './views/edit.js';
import { displayProfilePage } from './views/profile.js';

onApplicationStart();

function onApplicationStart() {

    setUserNav();

    attachEventListener();

    page('/', '/home');
    page('/index.html', '/home');

    page(decorateContext);

    page('/home', displayHomePage);
    page('/login', displayLogInPage);
    page('/register', displayRegisterPage);
    page('/catalog', displayCatalogPage);
    page('/create', displayCreatePage);
    page('/details/:id', displayDetailsPage);
    page('/edit/:id', displayEditPage);
    page('/my-profile', displayProfilePage);

    page.start();

}

function attachEventListener() {

    document.querySelector('#logout-btn').addEventListener('click', async () => {

        await logUserOut();

        setUserNav();

        page.redirect('/home');

    });

}