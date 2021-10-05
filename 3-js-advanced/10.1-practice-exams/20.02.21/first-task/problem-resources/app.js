function solve() {

   function getDOMElements() {

      const inputElAuthor = document.querySelector('#creator');

      const inputElTitle = document.querySelector('#title');

      const inputElCategory = document.querySelector('#category');

      const textareaContent = document.querySelector('#content');

      const sectionEl = document.querySelector('main > section');

      const olElArchive = document.querySelector('ol');

      return {

         inputElAuthor,

         inputElTitle,

         inputElCategory,

         textareaContent,

         sectionEl,

         olElArchive,

      };

   }

   document.querySelector('button').addEventListener('click', onCreate);

   const elmnts = getDOMElements();

   function onCreate(ev) {

      ev.preventDefault();

      appendChildren(elmnts.sectionEl,
         appendChildren(createElement('article'), createElement('h1', elmnts.inputElTitle.value),
            appendChildren(createElement('p', 'Category:'), createElement('strong', elmnts.inputElCategory.value)),
            appendChildren(createElement('p', 'Creator:'), createElement('strong', elmnts.inputElAuthor.value)), createElement('p', elmnts.textareaContent.value),
            appendChildren(createElement('div', '', { className: 'buttons' }), createElement('button', 'Delete', { className: 'btn delete', onClick: onDelete }), createElement('button', 'Archive', { className: 'btn archive', onClick: onArchive }))));

      elmnts.inputElAuthor.value = '';

      elmnts.inputElTitle.value = '';

      elmnts.inputElCategory.value = '';

      elmnts.textareaContent.value = '';

   }

   function onDelete(ev) {

      ev.target.parentElement.parentElement.remove();

   }

   function onArchive(ev) {

      const currentTitle = ev.target.parentElement.parentElement.children[0].textContent;

      const currentLiEl = createElement('li', currentTitle);

      ev.target.parentElement.parentElement.remove();

      elmnts.olElArchive.appendChild(currentLiEl);

      sortLiElmnts(elmnts.olElArchive);

   }

   function sortLiElmnts(parent) {

      Array.from(parent.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(e => parent.appendChild(e));

   }

   function appendChildren(parent, ...children) {

      children.forEach(e => parent.appendChild(e));

      return parent;

   }

   function createElement(type, content, attributes) {

      const el = document.createElement(type);

      if (content) {

         el.textContent = content;

      }

      if (attributes) {

         Object.entries(attributes).forEach(([k, v]) => {

            k.slice(0, 2) == 'on' ? el.addEventListener('click', v) : el[k] = v;

         });

      }

      return el;

   }

}