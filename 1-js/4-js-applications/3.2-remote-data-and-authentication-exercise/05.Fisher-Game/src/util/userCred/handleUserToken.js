function setUserToken(data) {

    sessionStorage.setItem('userToken', data.accessToken);

}

function getUserToken() {

    return sessionStorage.getItem('userToken');

}

function removeUserToken() {

    sessionStorage.removeItem('userToken');

}

export { setUserToken, getUserToken, removeUserToken };