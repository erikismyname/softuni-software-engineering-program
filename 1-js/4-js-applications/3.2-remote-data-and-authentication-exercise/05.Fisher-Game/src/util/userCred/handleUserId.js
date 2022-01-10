function setUserId(data) {

    sessionStorage.setItem('userId', data._id);

}

function getUserId() {

    return sessionStorage.getItem('userId');

}

function removeUserId() {

    sessionStorage.removeItem('userId');

}

export { setUserId, getUserId, removeUserId };