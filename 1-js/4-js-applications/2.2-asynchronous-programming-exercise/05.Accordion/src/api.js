async function getArticlesTitles() {

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}

async function getArticlesDetails() {

    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return Object.values(data).map(e => e.content);

}

export { getArticlesTitles, getArticlesDetails };