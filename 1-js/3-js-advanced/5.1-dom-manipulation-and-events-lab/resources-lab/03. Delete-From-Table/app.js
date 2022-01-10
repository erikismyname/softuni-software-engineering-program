function deleteByEmail() {

    const inputEl = document.querySelector('input');

    const divEl = document.getElementById('result');

    const element = findElement(document.querySelectorAll('table tbody td'));

    if (element) {

        element.parentNode.remove();

        divEl.textContent = 'Deleted.';

        inputEl.value = '';

        return;

    }

    divEl.textContent = 'Not found.';

    function findElement(nodeList) {

        return Array.from(nodeList).find(e => e.textContent == inputEl.value);

    }

}