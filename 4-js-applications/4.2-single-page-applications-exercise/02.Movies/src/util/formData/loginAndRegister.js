export function handleFormDataValues(formData, type) {

    const values = getFormDataValues(formData, type);

    if (!validateFormDataValues(values)) {

        throw new Error('Would you kindly fill all of the fields?');

    }

    return values;

}

function getFormDataValues(formData, type) {

    const email = formData.get('email').trim();

    const password = formData.get('password').trim();

    if (type == 'register') {

        const rePassword = formData.get('repeatPassword').trim();

        return [email, password, rePassword];

    }

    return [email, password];

}

function validateFormDataValues(values) {

    return values.every(v => v)

}