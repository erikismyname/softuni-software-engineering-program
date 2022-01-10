function verifyRequest(obj) {

    let status = '';

    if (!checkMethod(obj.method)) {

        status = 'Method';

    } else if (!obj.hasOwnProperty('uri') || !checkUri(obj.uri)) {

        status = 'URI';

    } else if (!checkVersion(obj.version)) {

        status = 'Version';

    } else if (!obj.hasOwnProperty('message') || checkMessage(obj.message)) {

        status = 'Message';

    }

    if (status) {

        throw new Error(`Invalid request header: Invalid ${status}`);

    }

    return obj;

    function checkMethod(method) {

        const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        return validMethods.includes(method) ? true : false;

    }

    function checkUri(uri) {

        const pattern = /^\*$|^[A-Za-z0-9\.]+$/gm;

        return pattern.test(uri);

    }

    function checkVersion(version) {

        const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        return validVersions.includes(version);

    }

    function checkMessage(message) {

        const pattern = /[<>&\\'"]/g;

        return pattern.test(message);

    }

}

console.log(verifyRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  
  
  
));

// console.log(verifyRequest({
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// }
  
//   ));