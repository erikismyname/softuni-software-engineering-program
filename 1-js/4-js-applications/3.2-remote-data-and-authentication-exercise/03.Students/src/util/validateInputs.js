export function validateInputs(firstName, lastName, facultyNumber, grade) {

    return firstName && lastName && !isNaN(facultyNumber) && grade;

}