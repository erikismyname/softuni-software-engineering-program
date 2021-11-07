import page from '../node_modules/page/page.mjs';

import { decorateContext } from './middleware/decorateContext.js';
import { logUserOut } from './services/userService.js';
import { renderCreatePage } from './views/create.js';
import { renderDashboardPage } from './views/dashboard.js';
import { renderDetailsPage } from './views/details.js';
import { renderEditPage } from './views/edit.js';
import { renderLogInPage } from './views/login.js';
import { renderProfilePage } from './views/profile.js';
import { renderRegisterPage } from './views/register.js';

onApplicationStart();

function onApplicationStart() {

    attachEventListener();

    page(decorateContext);

    page('/', '/home');
    page('/index.html', '/home');

    page('/login', renderLogInPage);
    page('/register', renderRegisterPage);
    page('/create', renderCreatePage);
    page('/dashboard', renderDashboardPage);
    page('/profile', renderProfilePage)
    page('/details/:id', renderDetailsPage);
    page('/edit/:id', renderEditPage);

    page.start();

}

function attachEventListener() {

    document.querySelector('#logout-btn').addEventListener('click', async () => {

        await logUserOut();

        page.redirect('/dashboard');

    });

}