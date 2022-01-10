function composeObject(arr) {

    const obj = {};

    for (let i = 0; i < arr.length; i += 2) {

        obj[arr[i]] = Number(arr[i + 1]);

    }

    return obj;

}