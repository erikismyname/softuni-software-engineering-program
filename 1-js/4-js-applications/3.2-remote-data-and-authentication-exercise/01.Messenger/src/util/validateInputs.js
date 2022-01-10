export function validateInputs(...inputElmnts) {

    return inputElmnts
        .map(e => e.value)
        .every(v => v);

}