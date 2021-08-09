function solve() {

  const textArea = document.getElementById('input');

  const inputText = formatInput(textArea.value);

  const paragraphs = createParagraphs(inputText);

  document.getElementById('output').innerHTML = paragraphs.join('\n');

  function createParagraphs(arr) {

    const result = [];

    while (arr.length) {

      let sentences = arr.splice(0, 3);

      result.push(`<p>${sentences.join('. ')}.</p>`);

    }

    return result;

  }

  function formatInput(str) {

    return str.split('.').map(e => e.trim()).filter(e => e);

  }

}