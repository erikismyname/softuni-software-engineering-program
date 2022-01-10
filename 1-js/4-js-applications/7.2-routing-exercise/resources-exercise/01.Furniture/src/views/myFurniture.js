import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyFurniture } from '../services/furnitureService.js';
import { furnitureTemplate } from './common/furnitureTemplate.js';

const myFurnitureTemplate = furniture => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furniture.map(furnitureTemplate)}
    </div>
`;

export async function myFurniturePage(ctx) {

    const furnitureData = await getMyFurniture();

    ctx.render(myFurnitureTemplate(furnitureData));

    ctx.setActiveNav('profileLink');

}