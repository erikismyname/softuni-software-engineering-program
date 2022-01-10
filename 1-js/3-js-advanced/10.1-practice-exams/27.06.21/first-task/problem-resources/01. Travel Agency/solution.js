window.addEventListener('load', solution);

function solution() {

  const elmnts = getDOMElements();

  attachEventListeners();

  const inputValues = [];

  function getDOMElements() {

    const inputElName = document.querySelector('#fname');

    const inputElEmail = document.querySelector('#email');

    const inputElPhone = document.querySelector('#phone');

    const inputElAddr = document.querySelector('#address');

    const inputElCode = document.querySelector('#code');

    const inputElSubm = document.querySelector('#submitBTN');

    const inputElmntsForm = Array.from(document.querySelectorAll('#form input')).slice(0, -1);

    const ulElInfoPrev = document.querySelector('#infoPreview');

    const inputElEdit = document.querySelector('#editBTN');

    const inputElCont = document.querySelector('#continueBTN');

    const divElWrapper = document.querySelector('#block');

    return {

      inputElName,

      inputElEmail,

      inputElPhone,

      inputElAddr,

      inputElCode,

      inputElSubm,

      inputElmntsForm,

      ulElInfoPrev,

      inputElEdit,

      inputElCont,

      divElWrapper,

    };

  }

  function attachEventListeners() {

    elmnts.inputElSubm.addEventListener('click', onSubmit);

    elmnts.inputElEdit.addEventListener('click', onEdit);

    elmnts.inputElCont.addEventListener('click', onContinue);

  }

  function validateInput(fullName, email) {

    return fullName.value.trim() && email.value.trim();

  }

  function onSubmit(ev) {

    ev.preventDefault();

    if (validateInput(elmnts.inputElName, elmnts.inputElEmail)) {

      elmnts.inputElmntsForm.forEach((e, i) => inputValues[i] = e.value);

      appendChildren(elmnts.ulElInfoPrev, createElement('li', `Full Name: ${elmnts.inputElName.value}`), createElement('li', `Email: ${elmnts.inputElEmail.value}`), createElement('li', `Phone Number: ${elmnts.inputElPhone.value}`), createElement('li', `Address: ${elmnts.inputElAddr.value}`), createElement('li', `Postal Code: ${elmnts.inputElCode.value}`));

      elmnts.inputElmntsForm.forEach(e => e.value = '');

      elmnts.inputElSubm.disabled = true;

      elmnts.inputElEdit.disabled = false;

      elmnts.inputElCont.disabled = false;

    }

  }

  function onEdit() {

    elmnts.inputElmntsForm.forEach((e, i) => e.value = inputValues[i]);

    // Array.from(elmnts.ulElInfoPrev.children).forEach(e => e.remove());

    elmnts.ulElInfoPrev.innerHTML = '';

    elmnts.inputElEdit.disabled = true;

    elmnts.inputElCont.disabled = true;

    elmnts.inputElSubm.disabled = false;

  }

  function onContinue() {

    // Array.from(elmnts.divElWrapper.children).forEach(e => e.remove());

    elmnts.divElWrapper.innerHTML = '';

    const h3El = createElement('h3', 'Thank you for your reservation!');

    elmnts.divElWrapper.appendChild(h3El);

  }

  function createElement(type, content) {

    const el = document.createElement(type);

    el.textContent = content;

    return el;

  }

  function appendChildren(parent, ...children) {

    children.forEach(e => parent.appendChild(e));

    return parent;

  }

}