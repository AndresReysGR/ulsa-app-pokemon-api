
const pokemonName = document.getElementById('pokemon-name');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonFronting=document.getElementById(`pokemon-img-front`);
const pokemonNumber = document.getElementById(`pokemon-number`);
const pokemonWeight = document.getElementById(`pokemon-weights`);
const pokemonAbilities=document.getElementById(`pokemon-abilities`)

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonAbilityData = async url=>{
    const response =await fetch(url);
    const abilityData =await response.json();
    return abilityData;
}
let getPokemonData = async ()=> {
    const respose = await fetch(`${pokemonApiUrl}pokemon/500/`);
    const pokemon = await respose.json();
    console.log(pokemon);
    const {name , height, abilities} = pokemon;
    const frontImg =pokemon.sprites.front_default;
    pokemonName.innerText = name;

    abilities.forEach(async element=>{
        const abilityData = await getPokemonAbilityData(element.ability.url);
        const effect_entries=abilityData.effect_entries;
        pokemonAbilities.abilities.innerHTML += `<li>${element.ability.name}
        <div>Efecto:
            <ul>
                ${effect_entries[0].effect}
            </ul>
            </div>
            </li>`

    });

    pokemonHeight.innerText = `La altura es: ${height}`;
    pokemonNumber.innerText= `Numero de Pokedexs: ${pokemon.id}`;
    pokemonWeight.innerText=`El peso es de: ${pokemon.weight}`
    pokemonFrontImg.src = frontImg;
};

getPokemonData();