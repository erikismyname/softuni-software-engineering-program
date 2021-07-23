export function handleFormValues(formData) {

    const [email, password, rePassword] = getFormValues(formData);

    validateFormValues(email, password, rePassword);

    return [email, password];

}

function getFormValues(formData) {

    const email = formData.get('email').trim();

    const password = formData.get('password').trim();

    const rePassword = formData.get('repeatPassword').trim();

    return [email, password, rePassword];

}

function validateFormValues(email, password, rePassword) {

    if (!/[@][\d]/.test(email)) {

        throw new Error('The email should include \'@\' and at least one digit after it!');

    } else if (email.length < 3) {

        throw new Error('The email should be at least 3 characters long!');

    } else if (password.length < 3) {

        throw new Error('The password should be at least 3 characters long!');

    } else if (password != rePassword) {

        throw new Error('Passwords should match!');

    }

}