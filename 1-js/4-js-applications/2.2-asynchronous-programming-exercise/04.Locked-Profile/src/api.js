export async function getProfilesData() {

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch(url);

    if (!response.ok) {

        const error = await response.json();

        alert(error.message);

        throw new Error(error.message);

    }

    const data = await response.json();

    return data;

}