import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOneFurniture, deleteFurniture } from '../services/furnitureService.js';

const detailsTemplate = (furniture, isOwner, onFurnitureDelete) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${furniture.img.slice(1)} />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            <p>Material: <span>${furniture.material}</span></p>
            ${isOwner ? html`
            <div>
                <a href=${`/edit/${furniture._id}`} class="btn btn-info">Edit</a>
                <a @click=${onFurnitureDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
            </div>
            ` : ''}
        </div>
    </div>
`;

export async function detailsPage(ctx) {

    const furnitureId = ctx.params.id;

    const furniture = await getOneFurniture(furnitureId);

    const isOwner = sessionStorage.getItem('userId') == furniture._ownerId;

    ctx.render(detailsTemplate(furniture, isOwner, onFurnitureDelete));

    ctx.setActiveNav();

    async function onFurnitureDelete() {

        const isConfirmed = confirm('Are you sure you want to delete this furniture?');

        if (isConfirmed) {

            await deleteFurniture(furnitureId);

            ctx.page.redirect('/dashboard');

        }

    }

}