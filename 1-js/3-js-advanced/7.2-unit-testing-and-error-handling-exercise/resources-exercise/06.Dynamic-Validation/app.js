function validate() {

    document.querySelector('#email').addEventListener('change', (ev) => {

        ev.target.className = /[a-z]+@[a-z]+\.[a-z]+/.test(ev.target.value) ? '' : 'error';

    });

}