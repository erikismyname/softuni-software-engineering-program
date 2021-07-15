import { getDOMElements } from './dom/getElements.js';
import { makeARequest } from './api/makeARequest.js';
import { url } from './config/url.js';
import { displayBooks } from './dom/displayBooks.js';
import { checkFormValues } from './util/handleFormData.js';

attachEventListeners();

function attachEventListeners() {

    const { btnElLoad, tableEl, formElCreate, formElEdit, btnElCancel } = getDOMElements();

    btnElLoad.addEventListener('click', onLoad);

    tableEl.addEventListener('click', handleTableClick);

    formElCreate.addEventListener('submit', onCreate);

    formElEdit.addEventListener('submit', onUpdate);

    btnElCancel.addEventListener('click', onCancel);

}

async function onLoad() {

    try {

        const books = await makeARequest(url);

        displayBooks(books);

    } catch (err) {

        alert(err);

    }

}

function handleTableClick(ev) {

    if (ev.target.textContent == 'Edit' || ev.target.textContent == 'Delete') {

        const bookId = ev.target.closest('tr').dataset.id;

        ev.target.textContent == 'Edit' ? onEdit(bookId) : onDelete(bookId);

    }

}

async function onEdit(bookId) {

    const { formElCreate, formElEdit } = getDOMElements();

    formElCreate.style.display = 'none';

    formElEdit.style.display = 'block';

    const books = await makeARequest(url);

    const [id, bookData] = Object.entries(books).find(b => b[0] == bookId);

    formElEdit.querySelector('input[name="title"]').value = bookData.title;

    formElEdit.querySelector('input[name="author"]').value = bookData.author;

    formElEdit.querySelector('input[name="id"]').value = id;

}

async function onUpdate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const { title, author } = checkFormValues(formData);

        const id = formData.get('id');

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author,
                title,
            }),
        };

        ev.target.reset();

        await makeARequest(url + id, options);

        const books = await makeARequest(url);

        displayBooks(books);

        alert('Successfully updated record!');

    } catch (err) {

        alert(err);

    }

}

async function onCancel(ev) {

    const { formElCreate, formElEdit } = getDOMElements();

    ev.preventDefault();

    formElEdit.reset();

    formElEdit.style.display = 'none';

    formElCreate.style.display = 'block';

}

async function onDelete(bookId) {

    const isConfirmed = confirm('Are you sure you want to delete this record?');

    if (isConfirmed) {

        try {

            await makeARequest(url + bookId, { method: 'DELETE' });

            const books = await makeARequest(url);

            displayBooks(books);

            alert('Successfully deleted record!');


        } catch (err) {

            alert(err);

        }

    }

}

async function onCreate(ev) {

    ev.preventDefault();

    const formData = new FormData(ev.target);

    try {

        const { title, author } = checkFormValues(formData);

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author,
                title,
            }),
        };

        ev.target.reset();

        await makeARequest(url, options);

        const books = await makeARequest(url);

        displayBooks(books);

        alert('Successfully added record!');

    } catch (err) {

        alert(err);

    }

}