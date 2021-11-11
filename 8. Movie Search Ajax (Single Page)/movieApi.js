export const key = '29291039'; // '5b9b7798';
export const apiUrl = 'https://omdbapi.com/';

export async function getOmdbApi(name, type, page = 1) {
    let response = await fetch(`${apiUrl}/?s=/${name}&type=${type}&page=${page}&apikey=${key}`);
    let data = await response.json();
    return data;
}

export async function getMovieDetail(id) {
    let response = await fetch(`${apiUrl}/?i=${id}&apikey=${key}`);
    let data = await response.json();
    return data;
}