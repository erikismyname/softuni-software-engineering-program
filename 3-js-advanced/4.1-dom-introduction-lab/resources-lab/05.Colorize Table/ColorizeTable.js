function colorize() {

    Array.from(document.getElementsByTagName('tr')).filter((e, i) => i % 2 != 0).map(e => e.style.backgroundColor = 'teal');

}