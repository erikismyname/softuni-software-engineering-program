function toggle() {

    const spanEl = document.querySelector('span');

    const divEl = document.getElementById('extra');

    spanEl.textContent == 'More' ? toggleOn(spanEl, divEl) : toggleOff(spanEl, divEl);

    function toggleOn(spanEl, divEl) {

        spanEl.textContent = 'Less';

        divEl.style.display = 'block';

    }

    function toggleOff(spanEl, divEl) {

        spanEl.textContent = 'More';

        divEl.style.display = 'none';

    }

}