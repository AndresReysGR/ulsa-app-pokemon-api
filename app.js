
const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFronting=document.getElementById(`pokemon-img-front`);
const pokemonNumber = document.getElementById(`pokemon-number`);
const pokemonWeight = document.getElementById(`pokemon-weights`);
const pokemonAbilities=document.getElementById(`pokemon-abilities`)

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/500/`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name , height, abilities} = pokemon;
    const frontImg =pokemon.sprites.front_default;
    pokemonName.innerText = name;

    abilities.forEach(element=>{
        pokemonAbilities.innerHTML = `<li>${element.name}</li>`;
    });

    pokemonHeight.innerText = `La altura es: ${height}`;
    pokemonNumber.innerText= `Numero de Pokedexs: ${pokemon.id}`;
    pokemonWeight.innerText=`El peso es de: ${pokemon.weight}`
    pokemonFrontImg.src = frontImg;
};

getPokemonData();