export function validatePasswordsMatch(password, rePassword) {

    if (password != rePassword) {

        throw new Error('Would you kindly take care of the mismatching passwords?');

    }

}