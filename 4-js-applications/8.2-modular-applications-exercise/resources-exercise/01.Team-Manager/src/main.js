import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { getDOMElements } from './dom/getDOMElements.js';
import { setUserNav } from './views/nav.js';
import { displayHomePage } from './views/home.js';
import { displayBrowsePage } from './views/browse.js';
import { displayLogInPage } from './views/logIn.js';
import { displayRegisterPage } from './views/register.js';
import { displayCreatePage } from './views/create.js';
import { displayDetailsPage } from './views/details.js';
import { displayEditPage } from './views/edit.js';
import { logOutUser } from './services/userService.js';
import { displayMyTeamsPage } from './views/myTeams.js';

onApplicationStart();

function onApplicationStart() {

    page('/', decorateContext, displayHomePage);
    page('/index.html', decorateContext, displayHomePage);
    page('/browse', decorateContext, displayBrowsePage);
    page('/login', decorateContext, displayLogInPage);
    page('/register', decorateContext, displayRegisterPage);
    page('/create', decorateContext, displayCreatePage);
    page('/details/:id', decorateContext, displayDetailsPage);
    page('/edit/:id', decorateContext, displayEditPage);
    page('/my-teams', decorateContext, displayMyTeamsPage);


    page.start();

    setUserNav();

    attachEventListener();

}

function decorateContext(ctx, next) {

    const { mainEl } = getDOMElements();

    ctx.render = content => render(content, mainEl);

    ctx.setUserNav = setUserNav;

    next();

}

function attachEventListener() {

    const { aElLogout } = getDOMElements();

    aElLogout.addEventListener('click', onUserLogOut);

}

async function onUserLogOut() {

    await logOutUser();

    setUserNav();

    page.redirect('/');

}