export async function getReposData() {

    const url = 'https://api.github.com/users/testnakov/repos';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        alert(error.message);

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}