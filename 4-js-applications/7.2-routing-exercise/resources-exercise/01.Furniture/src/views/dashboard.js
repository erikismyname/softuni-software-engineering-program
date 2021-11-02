import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFurniture } from '../services/furnitureService.js';
import { furnitureTemplate } from './common/furnitureTemplate.js';

const dashboardTemplate = furniture => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${furniture.map(furnitureTemplate)}
    </div>
`;

export async function dashboardPage(ctx) {

    const furnitureData = await getAllFurniture();

    ctx.render(dashboardTemplate(furnitureData));

    ctx.setActiveNav('catalogLink');

}