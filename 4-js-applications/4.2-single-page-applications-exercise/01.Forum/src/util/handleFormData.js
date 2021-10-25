export function handleFormDataValues(formData) {

    const values = getFormDataValues(formData);

    if (!validateFormDataValues(values)) {

        throw new Error('Would you kindly fill all of the fields?');

    }

    return values;

}

function getFormDataValues(formData) {

    const title = formData.get('topicName').trim();

    const username = formData.get('username').trim();

    const description = formData.get('postText').trim();

    return [title, username, description];

}

function validateFormDataValues(values) {

    return values.every(v => v)

}