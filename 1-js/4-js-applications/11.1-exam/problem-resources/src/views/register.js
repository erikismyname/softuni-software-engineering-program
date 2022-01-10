import { html } from '../../node_modules/lit-html/lit-html.js';

import { registerUser } from '../services/userService.js';

const registerPageTemplate = (onUserRegister) => html`
    <section id="register-page" class="register">
        <form @submit=${onUserRegister} id="register-form" action="" method="">
            <fieldset>
                <legend>Register Form</legend>
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
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>
`;

export async function renderRegisterPage(ctx) {

    ctx.render(registerPageTemplate(onUserRegister));

    async function onUserRegister(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        const rePass = formData.get('confirm-pass').trim();

        if (!email || !password) {

            alert('Would you kindly fill all of the fields?');

            return;

        } else if (password != rePass) {

            alert('Would you kindly take care of the mismatching passwords?');

            return;

        }

        await registerUser({ email, password });

        ev.target.reset();

        ctx.page.redirect('/dashboard');

    }

}