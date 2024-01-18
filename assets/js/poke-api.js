
<<<<<<< HEAD


const pokeApi = {}

function convertPokeApiToPokemon(pokeDetails){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetails.id
    pokemon.name = pokeDetails.name

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
=======
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
    const [type] = types

    pokemon.types = types
    pokemon.type = type

<<<<<<< HEAD
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default
    const skill = pokeDetails.abilities ? pokeDetails.abilities.map((abilSlot) => abilSlot.ability.name) : [];
    pokemon.skill = skill;
=======
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33

    return pokemon
}

<<<<<<< HEAD
pokeApi.getPokemonsDetails= (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiToPokemon)
}

pokeApi.getPokemons = (offset = 0,limit = 6) =>{

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((resp) => resp.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
=======
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
