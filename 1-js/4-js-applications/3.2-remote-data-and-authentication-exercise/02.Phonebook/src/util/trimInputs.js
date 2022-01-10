export function trimInputs(...inputElmnts) {

    return inputElmnts
        .map(e => e.value)
        .map(v => v.trim());

}