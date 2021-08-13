function solve() {

  const [firstSecEl, secondSecEl, thirdSecEl] = document.querySelectorAll('section');

  Array.from(document.querySelectorAll('.answer-text')).forEach(e => e.addEventListener('click', onClick));

  const ulEl = document.getElementById('results');

  const hOneEl = document.querySelector('.results-inner').children[0];

  let counter = 0;

  function onClick(ev) {

    if (firstSecEl.style.display == '') {

      if (ev.target.textContent == 'onclick') {

        counter++;

      }

      firstSecEl.style.display = 'none';

      secondSecEl.style.display = 'block';

      return;

    }

    if (secondSecEl.style.display == 'block') {

      if (ev.target.textContent == 'JSON.stringify()') {

        counter++;

      }

      secondSecEl.style.display = 'none';

      thirdSecEl.style.display = 'block';

      return;

    }

    if (thirdSecEl.style.display == 'block') {

      if (ev.target.textContent == 'A programming API for HTML and XML documents') {

        counter++;

      }

      counter < 3 ? hOneEl.textContent = `You have ${counter} right answers` : hOneEl.textContent = `You are recognized as top JavaScript fan!`

      thirdSecEl.style.display = 'none';

      ulEl.style.display = 'block';

    }

  }

}