export function createElement(type, content, attributes) {

    const elmnt = document.createElement(type);

    if (content) {

        elmnt.textContent = content;

    }

    if (attributes) {

        Object.entries(attributes).forEach(([k, v]) => {

            k.slice(0, 2) == 'on' ? elmnt.addEventListener('click', v) : elmnt.setAttribute(k, v);

        });

    }

    return elmnt;

}