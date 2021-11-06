import { html } from '../../node_modules/lit-html/lit-html.js';

import { notifyUser } from '../notification.js';
import { registerUser } from '../services/userService.js';

const registerPageTemplate = (onUserRegister) => html`
    <section id="register">
        <form @submit=${onUserRegister} id="register-form">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export async function displayRegisterPage(ctx) {

    ctx.setActiveNav(ctx.pathname);

    ctx.render(registerPageTemplate(onUserRegister));

    async function onUserRegister(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username').trim();

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        const rePass = formData.get('repeatPass').trim();

        const gender = formData.get('gender').trim();

        try {

            if (!username || !email || !password) {

                throw new Error('Would you kindly fill all of the fields?');

            } else if (password != rePass) {

                throw new Error('Would you kindly take care of the mismatching passwords?');

            }

            ev.target.reset();

            await registerUser({ username, email, password, gender });

            ctx.setUserNav();

            ctx.page.redirect('/catalog');

        } catch (err) {

            notifyUser(err);

        }

    }

}