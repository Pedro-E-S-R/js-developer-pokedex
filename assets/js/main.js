<<<<<<< HEAD
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 6;
let offset = 0;

const max = 151;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" data-pokemon-id="${pokemon.number}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail" >
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <a class="view ${pokemon.type}" href="pokemon.html"data-pokemon-id="${pokemon.number}" id="detalhesBtn">Detalhes</a>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>`;
}

function loadMoreItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    });
}
let teste = 0;
loadMoreItems(offset, limit);

document.addEventListener('click', (event) => {
    const detalhesBtn = event.target.closest('.view');

    if (detalhesBtn && detalhesBtn.id === 'detalhesBtn') {
        const id = detalhesBtn.dataset.pokemonId -1;
        teste = id 
        localStorage.setItem('pokemonId', id);


    }
});
console.log('ID do Pokémon:', teste);
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qmax = offset + limit;

    if (qmax >= max) {
        const newMax = max - offset;
        loadMoreItems(offset, newMax);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadMoreItems(offset, limit);
    }
});
=======
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
