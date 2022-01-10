function sumTable() {

    document.getElementById('sum').textContent = Array.from(document.querySelectorAll('table tbody tr')).slice(1, -1).map(e => e.children[e.children.length - 1]).map(e => e.textContent).map(Number).reduce((acc, c) => acc + c, 0);

}