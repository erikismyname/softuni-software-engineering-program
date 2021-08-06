function extractText() {

    const ulElChildrenText = Array.from(document.getElementById('items').children).map(e => e.textContent);

    document.getElementById('result').value = ulElChildrenText.join('\n');

}