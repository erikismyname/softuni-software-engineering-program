import { render } from '../../node_modules/lit-html/lit-html.js';

import { getDOMElements } from '../dom/getDOMElements.js';
import { getUserData } from '../services/userService.js';
import { setUserNav } from '../views/nav.js';

export function decorateContext(ctx, next) {

    const { mainEl } = getDOMElements();

    ctx.render = content => render(content, mainEl);

    ctx.getUserData = getUserData;

    setUserNav(ctx);

    next();

}