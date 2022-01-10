async function getPosts() {

    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return Object.values(data);

}

async function getPost(postId) {

    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}

async function getComments(postId) {

    const url = 'http://localhost:3030/jsonstore/blog/comments';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    const data = await response.json();

    return Object.values(data).filter(e => e.postId == postId);

}

export { getPosts, getPost, getComments };