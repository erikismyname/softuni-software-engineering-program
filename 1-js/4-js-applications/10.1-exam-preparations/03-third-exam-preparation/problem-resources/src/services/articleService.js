import * as api from '../api/api.js';
import { urls } from '../config/urls.js';

async function getAllArticles() {

    const query = '?sortBy=_createdOn%20desc';

    const response = await api.getRequest(urls.articles + query);

    return response;

}

async function getOneArticle(articleId) {

    const response = await api.getRequest(urls.articles + `/${articleId}`);

    return response;

}

async function getRecentArticles() {

    const query = '?sortBy=_createdOn%20desc&distinct=category';

    const response = await api.getRequest(urls.articles + query);

    return response;

}

async function filterArticles(title) {

    const query = `?where=title%20LIKE%20%22${title}%22`;

    const response = await api.getRequest(urls.articles + query);

    return response;

}

async function createArticle(articleData) {

    const response = await api.postRequest(urls.articles, articleData);

    return response;

}

async function editArticle(articleId, articleData) {

    const response = await api.putRequest(urls.articles + `/${articleId}`, articleData);

    return response;

}

async function deleteArticle(articleId) {

    const response = await api.deleteRequest(urls.articles + `/${articleId}`);

    return response;

}

export {
    getAllArticles,
    getOneArticle,
    getRecentArticles,
    filterArticles,
    createArticle,
    editArticle,
    deleteArticle,
};