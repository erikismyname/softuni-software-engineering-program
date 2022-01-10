import { html } from '../../node_modules/lit-html/lit-html.js';

import { registerUser } from '../services/userService.js';

const registerPageTemplate = (onUserRegister) => html`
    <section id="register-page" class="content auth">
        <h1>Register</h1>
        <form @submit=${onUserRegister} id="register" action="#" method="">
            <fieldset>
                <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                    It
                    increases by diffusion and grows by dispersion.</blockquote>
                <p class="field email">
                    <label for="register-email">Email:</label>
                    <input type="email" id="register-email" name="email" placeholder="maria@email.com">
                </p>
                <p class="field password">
                    <label for="register-pass">Password:</label>
                    <input type="password" name="password" id="register-pass">
                </p>
                <p class="field password">
                    <label for="register-rep-pass">Repeat password:</label>
                    <input type="password" name="rep-pass" id="register-rep-pass">
                </p>
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Register">
                </p>
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
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

        const rePass = formData.get('rep-pass').trim();

        if (!email || !password) {

            alert('Would you kindly fill all of the fields?');

            return;

        } else if (password != rePass) {

            alert('Would you kindly take care of the mismatching passwords?');

            return;

        }

        ev.target.reset();

        await registerUser({ email, password });

        ctx.page.redirect('/home');

    }

}