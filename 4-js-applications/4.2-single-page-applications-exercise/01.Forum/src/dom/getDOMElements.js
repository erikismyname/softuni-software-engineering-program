export function getDOMElements() {

    const sectionEl = document.querySelector('section');

    const aElHome = document.querySelector('#home-link');

    const divElTopicCont = document.querySelector('.topic-container');

    return { sectionEl, aElHome, divElTopicCont };

}