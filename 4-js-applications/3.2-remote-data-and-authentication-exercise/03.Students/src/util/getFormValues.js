import { trimInputValue } from './trimInputValue.js';

export function getFormValues(formData) {

    const firstName = trimInputValue(formData.get('firstName'));

    const lastName = trimInputValue(formData.get('lastName'));

    const facultyNumber = trimInputValue(formData.get('facultyNumber'));

    const grade = Number(trimInputValue(formData.get('grade')));

    return {
        firstName,
        lastName,
        facultyNumber,
        grade,
    };

}