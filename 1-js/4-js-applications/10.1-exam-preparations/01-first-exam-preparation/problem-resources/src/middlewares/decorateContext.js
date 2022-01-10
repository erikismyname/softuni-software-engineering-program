import { render } from '../../node_modules/lit-html/lit-html.js';

import { getDOMElements } from '../dom/getDOMElements.js';
import { setUserNav, setActiveNav } from '../views/nav.js';

export function decorateContext(ctx, next) {

    const { mainEl } = getDOMElements();

    ctx.render = content => render(content, mainEl);

    ctx.setUserNav = setUserNav;

    ctx.setActiveNav = setActiveNav;

    next();

}