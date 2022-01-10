import { html } from '../../node_modules/lit-html/lit-html.js';

import { logUserIn } from '../services/userService.js';

const logInPageTemplate = (onUserLogIn) => html`
    <section id="login-page" class="login">
        <form @submit=${onUserLogIn} id="login-form" action="" method="">
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>
`;

export async function renderLogInPage(ctx) {

    ctx.render(logInPageTemplate(onUserLogIn));

    async function onUserLogIn(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        if (!email || !password) {

            alert('Would you kindly fill both fields?');

            return;

        }

        await logUserIn({ email, password });

        ev.target.reset();

        ctx.page.redirect('/dashboard');

    }

}