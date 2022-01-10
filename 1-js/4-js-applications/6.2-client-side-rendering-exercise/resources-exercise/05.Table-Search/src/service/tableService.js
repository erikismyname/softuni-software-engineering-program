import { url } from '../config/url.js';
import { getRequest } from '../api/api.js';

export async function getTableData() {

    const response = await getRequest(url);

    return Object.values(response);

}