
const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFronting=document.getElementById(``)

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/1`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name , height} = pokemon;
    const fronting=pokemon.sprites.front_default;
    pokemonName.innerText = name;
    pokemonHeight.innerText = `La altura es: ${height}`;
};

getPokemonData();