function editElement(elRef, match, replacer) {

    elRef.textContent = elRef.textContent.replace(new RegExp(match, 'g'), replacer);

}