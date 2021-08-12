function solve() {

  const [inputTextArea, outputTextArea] = document.querySelectorAll('textarea');

  const [generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', onGenerate);

  buyBtn.addEventListener('click', onBuy);

  function onGenerate() {

    JSON.parse(inputTextArea.value).forEach(e => {

      const trEl = createElement('tr');

      const imgTdEl = appendChildren(createElement('td'), createElement('img', '', e.img));

      const nameTdEl = appendChildren(createElement('td'), createElement('p', e.name));

      const priceTdEl = appendChildren(createElement('td'), createElement('p', e.price));

      const decFacTdEl = appendChildren(createElement('td'), createElement('p', e.decFactor));

      const inputTdEl = appendChildren(createElement('td'), createElement('input', '', '', 'checkbox'));

      appendChildren(document.querySelector('table tbody'), appendChildren(trEl, imgTdEl, nameTdEl, priceTdEl, decFacTdEl, inputTdEl));

    });

  }

  function onBuy() {

    const names = [];

    const prices = [];

    const decFactors = [];

    Array.from(document.querySelectorAll('table tbody tr')).forEach(r => {

      const inputEl = r.children[4].children[0];

      if (inputEl.checked) {

        names.push(r.children[1].children[0].textContent);

        prices.push(Number(r.children[2].children[0].textContent));

        decFactors.push(Number(r.children[3].children[0].textContent));

      }

    });

    outputTextArea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${prices.reduce((acc, c) => acc + c, 0).toFixed(2)}\nAverage decoration factor: ${decFactors.reduce((acc, c, i, arr) => acc + (c / arr.length), 0)}`;

  }

  function createElement(type, content, src, inputType) {

    const el = document.createElement(type);

    if (content) {

      el.textContent = content;

    }

    if (src) {

      el.src = src;

    }

    if (inputType) {

      el.type = inputType;

    }

    return el;

  }

  function appendChildren(parent, ...children) {

    children.forEach(e => {

      parent.appendChild(e);

    });

    return parent;

  }

}