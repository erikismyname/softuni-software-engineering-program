function extensibleObject() {

    const proto = {};

    const extObj = Object.create(proto);

    extObj.extend = function (tempObj) {

        for (let key in tempObj) {

            typeof tempObj[key] == 'function' ? proto[key] = tempObj[key] : this[key] = tempObj[key];

        }

    }

    return extObj;

}