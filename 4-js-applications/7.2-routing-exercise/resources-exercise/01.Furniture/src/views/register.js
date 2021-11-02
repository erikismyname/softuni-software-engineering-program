import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../services/userService.js';

const registerTemplate = (onUserRegister, invEmail, invPass, invRePass) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onUserRegister}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + (invEmail ? ' is-invalid' : '')} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (invPass ? ' is-invalid' : '')} id="password" type="password"
                        name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control' + (invRePass ? ' is-invalid' : '')} id="rePass" type="password"
                        name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;

export async function registerPage(ctx) {

    ctx.render(registerTemplate(onUserRegister));

    ctx.setActiveNav('registerLink');

    async function onUserRegister(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        const rePassword = formData.get('rePass').trim();

        if (!email || !password || !rePassword) {

            alert('Would you kindly fill all of the required fields?');

            ctx.render(registerTemplate(onUserRegister, email == '', password == '', rePassword == ''));

            return;

        } else if (password != rePassword) {

            alert('Would you kindly take care of the mismatching passwords?');

            ctx.render(registerTemplate(onUserRegister, false, true, true));

            return;

        }

        ev.target.reset();

        await registerUser(email, password);

        ctx.setUserNav();

        ctx.page.redirect('/dashboard');

    }

}