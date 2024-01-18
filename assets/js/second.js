const num1 = localStorage.getItem('pokemonId');
const num2 = 1;
const all = document.getElementById('all');

function convertPToLi(pokemon){
    return `
    <section  class="container ${pokemon.type}">
            <div class="return"><a  class="ret" href="index.html" onclick="history.go(-1);">&#8592;</a></div>
            <div class="nam"><span class="name">${pokemon.name}</span></div>
            
            <div class="nu"><span class="num">#${pokemon.number}</span></div>
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
                 alt="${pokemon.name}">
        </section>
        
        <div class="info">
            <div class="skill">
                <h1>Skills</h1>
                <lo class="con">


                    ${pokemon.skill.map((skill) => `<li class="abili"">
                    <div class="effect">
                    ${skill}
                    </div>
                    </li>`).join('')}

                </lo>
            </div>
        </div>`

}




function loadMoreItems(num1, num2) {
    pokeApi.getPokemons(num1, 1).then((pokemons = []) => {
        all.innerHTML = pokemons.map(convertPToLi).join('');
    });
}

loadMoreItems(num1, 1);
