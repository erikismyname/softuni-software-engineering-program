function solve() {

   const inputText = document.getElementById('searchField');

   const tableRowsElmts = Array.from(document.querySelectorAll('table tbody tr'));

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      tableRowsElmts.forEach(r => {

         r.classList.remove('select');

         for (let c of Array.from(r.children)) {

            if (checkValidity(c)) {

               r.classList.add('select');

               break;

            }

         }

      });

      inputText.value = '';

   }

   function checkValidity(el) {

      return el.textContent.includes(inputText.value) && inputText.value != '';

   }

}