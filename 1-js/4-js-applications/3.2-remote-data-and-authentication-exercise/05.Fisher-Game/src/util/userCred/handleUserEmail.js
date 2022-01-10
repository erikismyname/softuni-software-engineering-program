function setUserEmail(data) {

    sessionStorage.setItem('userEmail', data.email);

}

function getUserEmail() {

    return sessionStorage.getItem('userEmail');

}

function removeUserEmail() {

    sessionStorage.removeItem('userEmail');

}

export { setUserEmail, getUserEmail, removeUserEmail };