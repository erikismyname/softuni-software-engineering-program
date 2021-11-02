import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFurniture } from '../services/furnitureService.js';

const createTemplate = onFurnitureCreate => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onFurnitureCreate}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
`;

export async function createPage(ctx) {

    ctx.render(createTemplate(onFurnitureCreate));

    ctx.setActiveNav('createLink');

    async function onFurnitureCreate(ev) {

        ev.preventDefault();

        const formData = new FormData(ev.target);

        const make = formData.get('make').trim();

        const model = formData.get('model').trim();

        const year = Number(formData.get('year').trim());

        const description = formData.get('description').trim();

        const price = Number(formData.get('price').trim());

        const img = formData.get('img').trim();

        const material = formData.get('material').trim();

        const requiredFields = [make, model, year, description, price, img];

        if (requiredFields.some(v => !v)) {

            alert('Would you kindly fill all of the required fields?');

            return;

        } else if (make.length < 4) {

            alert('Make must be at least 4 symbols long!');

            return;

        } else if (model.length < 4) {

            alert('Model must be at least 4 symbols long!');

            return;

        } else if (year < 1950 || year > 2050) {

            alert('Year must be between 1950 and 2050!');

            return;

        } else if (description.length <= 10) {

            alert('Description length must be more than 10 symbols!');

            return;

        } else if (price < 0) {

            alert('Price must be a positive number!');

            return;

        }

        ev.target.reset();

        await createFurniture({ make, model, year, description, price, img, material });

        ctx.page.redirect('/dashboard');

    }

}