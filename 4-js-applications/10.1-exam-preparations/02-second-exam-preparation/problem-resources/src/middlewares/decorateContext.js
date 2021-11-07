import { render } from '../../node_modules/lit-html/lit-html.js';

import { getDOMElements } from '../dom/getDOMElements.js';
import { getUserData, logUserOut } from '../services/userService.js';
import { setUserNav } from '../views/nav.js'

export function decorateContext(ctx, next) {

    const { mainEl, aElLogout } = getDOMElements();

    ctx.render = content => render(content, mainEl);

    ctx.getUserData = getUserData;

    setUserNav(ctx);

    // aElLogout.addEventListener('click', async () => {

    //     await logUserOut();

    //     ctx.page.redirect('/home');

    // });

    next();

}