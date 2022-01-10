function setInitialNumValue(val) {

    const num = val;

    return function changeInitialVal(val) {

        return num + val;

    }

}