export function validateInputData(...values) {

    if (!values.every(v => v)) {

        throw new Error('Would you kindly fill all of the fields?');

    }

}