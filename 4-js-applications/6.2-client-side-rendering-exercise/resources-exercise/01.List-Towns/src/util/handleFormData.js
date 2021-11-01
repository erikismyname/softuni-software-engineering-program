export function handleFormData(formData) {

    const towns = formData.get('towns').trim();

    if (!towns) {

        throw new Error('Would you kindly enter at least one town?');

    }

    return towns
        .split(', ')
        .map(e => e.trim());

}