import { trimInputValue } from '../trimInputValue.js';
import { validateInputData } from '../validations/validateInputData.js';

export function checkFormValues(formData) {

    const { email, password } = getFormValues(formData);

    validateInputData(email, password);

    return { email, password };

}

function getFormValues(formData) {

    const email = trimInputValue(formData.get('email'));

    const password = trimInputValue(formData.get('password'));

    return {
        email,
        password,
    };

}