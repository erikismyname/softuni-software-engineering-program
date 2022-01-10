export function handleFormValues(formData) {

    const [title, description, imageUrl] = getFormValues(formData);

    validateFormValues(title, description, imageUrl);

    return [title, description, imageUrl];

}

function getFormValues(formData) {

    const title = formData.get('title').trim();

    const description = formData.get('description').trim();

    const imageUrl = formData.get('imageURL').trim();

    return [title, description, imageUrl];

}

function validateFormValues(title, description, imageUrl) {

    if (title.length < 6) {

        throw new Error('The title should be at least 6 characters long!');

    } else if (description.length < 10) {

        throw new Error('The description should be at least 10 characters long!');

    } else if (imageUrl.length < 5) {

        throw new Error('The image URL should be at least 5 characters long!');

    }

}