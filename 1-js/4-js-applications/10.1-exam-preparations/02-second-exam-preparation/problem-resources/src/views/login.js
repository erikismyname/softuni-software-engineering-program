import { html } from '../../node_modules/lit-html/lit-html.js';

import { logUserIn } from '../services/userService.js';

const logInPageTemplate = (onUserLogIn) => html`
    <section id="login">
        <div class="container">
            <form @submit=${onUserLogIn} id="login-form" action="#" method="post">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
    
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;

export async function renderLogInPage(ctx) {

    ctx.render(logInPageTemplate(onUserLogIn));

    async function onUserLogIn(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username').trim();

        const password = formData.get('password').trim();

        if (!username || !password) {

            alert('Would you kindly fill both fields?');

            return;

        }

        ev.target.reset();

        await logUserIn({ username, password });

        ctx.page.redirect('/catalog');

    }

}