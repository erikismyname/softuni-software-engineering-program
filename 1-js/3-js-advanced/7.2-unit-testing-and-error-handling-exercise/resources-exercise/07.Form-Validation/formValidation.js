function validate() {

    const inputElUserName = document.querySelector('#username');

    const inputElEmail = document.querySelector('#email');

    const inputElPass = document.querySelector('#password');

    const inputElConfPass = document.querySelector('#confirm-password');

    const inputElCheckbox = document.querySelector('#company');

    inputElCheckbox.addEventListener('change', () => {

        fieldsetElCompInfo.style.display = fieldsetElCompInfo.style.display == 'block' ? 'none' : 'block';

    });

    const fieldsetElCompInfo = document.querySelector('#companyInfo');

    const inputElCompNum = document.querySelector('#companyNumber');

    const btnElSubmit = document.querySelector('#submit');

    btnElSubmit.addEventListener('click', onClick);

    const divElValid = document.querySelector('#valid');

    const inputElmnts = document.querySelectorAll('input');

    function onClick(ev) {

        ev.preventDefault();

        inputElUserName.style.borderColor = checkUserName(inputElUserName.value) ? '' : 'red';

        inputElEmail.style.borderColor = checkEmail(inputElEmail.value) ? '' : 'red';

        if (validatePasswords(inputElPass.value, inputElConfPass.value)) {

            inputElPass.style.borderColor = '';

            inputElConfPass.style.borderColor = '';

        } else {

            inputElPass.style.borderColor = 'red';

            inputElConfPass.style.borderColor = 'red';

        }

        if (inputElCheckbox.checked) {

            inputElCompNum.style.borderColor = checkCompanyNumber(inputElCompNum.value) ? '' : 'red';

        }

        inputElCheckbox.checked ? getResult(inputElmnts, 'all') : getResult(inputElmnts, 'filter')

    }

    function checkUserName(userName) {

        const pattern = /^[A-Za-z0-9]{3,20}$/;

        return pattern.test(userName);

    }

    function checkPassword(password) {

        const pattern = /^[\w]{5,15}$/;

        return pattern.test(password);

    }

    function validatePasswords(pass, confPass) {

        return checkPassword(pass) && pass == confPass;

    }

    function checkEmail(email) {

        const pattern = /^[\w]+@[\.\w]+$/;

        return pattern.test(email);

    }

    function checkCompanyNumber(num) {

        num = Number(num);

        return num >= 1000 && num <= 9999;

    }

    function getResult(collection, type) {

        const arr = Array.from(collection);

        type == 'all'
            ? arr
                .filter(e => e.type != 'checkbox')
                .every(e => e.style.borderColor == '') ? divElValid.style.display = 'block' : divElValid.style.display = 'none'
            : arr
                .slice(0, -2)
                .every(e => e.style.borderColor == '') ? divElValid.style.display = 'block' : divElValid.style.display = 'none';

    }

}