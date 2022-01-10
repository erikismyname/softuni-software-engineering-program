import { trimInputValue } from '../trimInputValue.js';
import { validateInputData } from '../validations/validateInputData.js';

export function checkFormValues(formData) {

    const { angler, weight, species, location, bait, captureTime } = getFormValues(formData);

    validateInputData(angler, weight, species, location, bait, captureTime);

    return { angler, weight, species, location, bait, captureTime };

}

function getFormValues(formData) {

    const angler = trimInputValue(formData.get('angler'));

    const weight = Number(trimInputValue(formData.get('weight')));

    const species = trimInputValue(formData.get('species'));

    const location = trimInputValue(formData.get('location'));

    const bait = trimInputValue(formData.get('bait'));

    const captureTime = Number(trimInputValue(formData.get('captureTime')));

    return {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
    };

}