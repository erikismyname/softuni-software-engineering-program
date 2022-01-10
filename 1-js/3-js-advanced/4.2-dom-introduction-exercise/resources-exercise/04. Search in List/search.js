function search() {

   const liElmtsText = Array.from(document.getElementById('towns').children).map(removeDecoration);

   const inputText = document.getElementById('searchText').value;

   const divEl = document.getElementById('result');

   let matches = 0;

   liElmtsText.filter(filterElmts).map(decorateElmts);

   divEl.textContent = `${matches} matches found`;

   function removeDecoration(el) {

      el.style.textDecoration = '';

      el.style.fontWeight = '';

      return el;

   }

   function decorateElmts(el) {

      el.style.textDecoration = 'underline';

      el.style.fontWeight = 'bold';

      return el;

   }

   function filterElmts(el) {

      if (el.textContent.includes(inputText) && inputText != '') {
         matches++;

         return true;

      }

      return false;

   }

}