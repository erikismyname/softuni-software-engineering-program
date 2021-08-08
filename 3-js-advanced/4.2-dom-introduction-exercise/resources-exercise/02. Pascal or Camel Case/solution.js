function solve() {

  const inputText = document.getElementById('text').value;

  const convention = document.getElementById('naming-convention').value;

  const spanEl = document.getElementById('result');

  spanEl.textContent = convention == 'Camel Case' || convention == 'Pascal Case' ? controller(convention) : 'Error!'

  function controller(convention) {

    return convention == 'Camel Case' ? toCamelCase(inputText) : toPascalCase(inputText);

  }

  function toCamelCase(str) {

    str = toPascalCase(str);

    return str[0].toLowerCase() + str.slice(1);

  }

  function toPascalCase(str) {

    return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join('');

  }

}