import { html } from '../../node_modules/lit-html/lit-html.js';

import { notifyUser } from '../notification.js';
import { logUserIn } from '../services/userService.js';

const logInPageTemplate = (onUserLogIn) => html`
    <section id="login">
        <form @submit=${onUserLogIn} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export async function displayLogInPage(ctx) {

    ctx.setActiveNav(ctx.pathname);

    ctx.render(logInPageTemplate(onUserLogIn));

    async function onUserLogIn(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        try {

            if (!email || !password) {

                throw new Error('Would you kindly fill both fields?');

            }

            ev.target.reset();

            await logUserIn({ email, password });

            ctx.setUserNav();

            ctx.page.redirect('/catalog');

        } catch (err) {

            notifyUser(err);

        }

    }

}