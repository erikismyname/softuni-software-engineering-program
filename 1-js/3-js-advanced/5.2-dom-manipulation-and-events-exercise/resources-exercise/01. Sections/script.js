function create(arr) {

   const divEl = document.getElementById('content');

   arr.map(transformElmnt).forEach(e => {

      divEl.appendChild(e);

   });

   function transformElmnt(el) {

      const divEl = createElement('div');

      divEl.appendChild(createElement('p', el));

      return divEl;

   }

   function createElement(type, content) {

      const el = document.createElement(type);

      if (type == 'p') {

         el.style.display = 'none';

      }

      if (type == 'div') {

         el.addEventListener('click', (ev) => {

            ev.target.querySelector('p').style.display = '';

         });

      }

      if (content) {

         el.textContent = content;

      }

      return el;

   }

}