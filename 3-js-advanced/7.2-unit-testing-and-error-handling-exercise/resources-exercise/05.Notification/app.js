function notify(message) {
  
  const divEl = document.querySelector('#notification');

  divEl.textContent = message;

  divEl.style.display = 'block';

  divEl.addEventListener('click', (ev) => {

    ev.target.style.display = 'none'

  });

}