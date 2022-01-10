import { html } from '../../node_modules/lit-html/lit-html.js';

import { getOneCar, editCar } from '../services/carService.js';

const editPageTemplate = (car, onCarEdit) => html`
    <section id="edit-listing">
        <div class="container">
            <form @submit=${onCarEdit} id="edit-form">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>
    
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>
`;

export async function renderEditPage(ctx) {

    const carId = ctx.params.id;

    const car = await getOneCar(carId);

    ctx.render(editPageTemplate(car, onCarEdit));

    async function onCarEdit(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const brand = formData.get('brand').trim();

        const model = formData.get('model').trim();

        const description = formData.get('description').trim();

        const year = Number(formData.get('year').trim());

        const imageUrl = formData.get('imageUrl').trim();

        const price = Number(formData.get('price').trim());

        if (!brand || !model || !description || !year || !imageUrl || !price) {

            alert('Would you kindly fill all of the fields?');

            return;

        } else if (year <= 0 || price <= 0) {

            alert('Year and price should be non-negative!');

            return;

        }

        ev.target.reset();

        await editCar(carId, { brand, model, description, year, imageUrl, price });

        ctx.page.redirect('/details/' + carId);

    }

}