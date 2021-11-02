import { html } from '../../node_modules/lit-html/lit-html.js';
import { loginUser } from '../services/userService.js';

const loginTemplate = (onUserLogin) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onUserLogin}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onUserLogin));

    ctx.setActiveNav('loginLink');

    async function onUserLogin(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();

        const password = formData.get('password').trim();

        ev.target.reset();

        await loginUser(email, password);

        ctx.setUserNav();

        ctx.page.redirect('/dashboard');

    }

}