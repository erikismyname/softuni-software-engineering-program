import { trimInputValue } from './trimInputValue.js';
import { validateInputs } from './validateInputs.js';

export function checkFormValues(formData) {

    const { title, author } = getFormValues(formData);

    if (!validateInputs(title, author)) {

        throw new Error('Would you kindly enter both an author and a book?');

    }

    return { title, author };

}

function getFormValues(formData) {

    const title = trimInputValue(formData.get('title'));

    const author = trimInputValue(formData.get('author'));

    return {
        title,
        author,
    };

}