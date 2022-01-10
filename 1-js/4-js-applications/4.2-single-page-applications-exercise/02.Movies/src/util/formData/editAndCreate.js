export function handleFormDataValues(formData) {

    const values = getFormDataValues(formData);

    if (!validateFormDataValues(values)) {

        throw new Error('Would you kindly fill all of the fields?');

    }

    return values;

}

function getFormDataValues(formData) {

    const title = formData.get('title').trim();

    const description = formData.get('description').trim();

    const imgUrl = formData.get('imageUrl').trim();

    return [title, description, imgUrl];

}

function validateFormDataValues(values) {

    return values.every(v => v)

}