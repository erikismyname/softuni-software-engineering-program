function validate() {

    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {

        const testResult = /[a-z]+@[a-z]+\.[a-z]+/g.test(ev.target.value);

        ev.target.className = testResult ? '' : 'error';

    }

}