// export const API = "https://pokeapi.co/api/v2/pokemon";
export const API = "http://localhost:4000/pokemon/";

export async function getPokemon(pokemon ) {
    return await fetch(API + pokemon)
        .then(response => response.json())
        .then(data => data);
}

export async function fetchUrl({ url }) {
    return await fetch(url)
        .then(response => response.json())
        .then(data => data);
}