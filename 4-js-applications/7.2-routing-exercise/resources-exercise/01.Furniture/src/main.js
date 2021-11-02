import page from '../node_modules/page/page.mjs';
import { dashboardPage } from './views/dashboard.js';
import { myFurniturePage } from './views/myFurniture.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { getDOMElements } from './dom/getDOMElements.js';
import { logoutUser } from './services/userService.js';
import { setUserNav, setActiveNav } from './views/nav.js';

onApplicationStart();

function onApplicationStart() {

    page('/', decorateContext, dashboardPage);
    page('/dashboard', decorateContext, dashboardPage);
    page('/my-furniture', decorateContext, myFurniturePage);
    page('/details/:id', decorateContext, detailsPage);
    page('/create', decorateContext, createPage);
    page('/edit/:id', decorateContext, editPage);
    page('/login', decorateContext, loginPage);
    page('/register', decorateContext, registerPage);

    page.start();

    setUserNav();

    attachEventListener();

}

function decorateContext(ctx, next) {

    const { divElContainer } = getDOMElements();

    ctx.render = content => render(content, divElContainer);

    ctx.setUserNav = setUserNav;

    ctx.setActiveNav = setActiveNav;

    next();

}

function attachEventListener() {

    const { btnElLogout } = getDOMElements();

    btnElLogout.addEventListener('click', onUserLogout);

}

async function onUserLogout() {

    await logoutUser();

    setUserNav();

    setActiveNav('catalogLink');

    page.redirect('/dashboard');

}