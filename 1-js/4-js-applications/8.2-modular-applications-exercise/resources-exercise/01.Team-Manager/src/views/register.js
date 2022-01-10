import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../services/userService.js';

const registerPageTemplate = (onUserRegister, errorMsg) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onUserRegister} id="register-form" class="main-form pad-large">
                ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
`;

export async function displayRegisterPage(ctx) {

    ctx.render(registerPageTemplate(onUserRegister));

    async function onUserRegister(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const username = formData.get('username').trim();

        const password = formData.get('password').trim();

        const rePass = formData.get('repass').trim();

        try {

            if (!email || !username || !password) {

                throw new Error('Would you kindy fill all of the required fields?');

            } else if (password != rePass) {

                throw new Error('Would you kindly take care of the mismatching passwords?');

            }

            await registerUser({ email, username, password });

            ev.target.reset();

            ctx.setUserNav();

            ctx.page.redirect('/my-teams')

        } catch (err) {

            ctx.render(registerPageTemplate(onUserRegister, err));

        }

    }

}