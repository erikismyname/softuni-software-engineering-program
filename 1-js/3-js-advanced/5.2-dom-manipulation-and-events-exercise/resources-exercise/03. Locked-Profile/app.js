function lockedProfile() {

    Array.from(document.querySelectorAll('button')).map(e => e.addEventListener('click', onClick));

    function onClick(ev) {

        const unlockInputEl = ev.target.parentNode.querySelectorAll('input[type="radio"]')[1];

        const toggleableDivEl = ev.target.previousElementSibling;

        if (unlockInputEl.checked) {

            ev.target.textContent == 'Show more' ? showMore(toggleableDivEl, ev.target) : showLess(toggleableDivEl, ev.target);

        }

    }

    function showMore(divEl, btn) {

        divEl.style.display = 'block';

        btn.textContent = 'Hide it';

    }

    function showLess(divEl, btn) {

        divEl.style.display = 'none';

        btn.textContent = 'Show more';

    }

}