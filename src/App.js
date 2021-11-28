import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';

const App = () => {

    const [info, setInfo] = useState([]);

    function fetchAPIPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                fetchPokemonData(pokemon);
            })
        })
    }

    function fetchPokemonData(pokemon){
        let url = pokemon.url 
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
            renderPokemon(pokeData)
        })
    }

    useEffect(() => {
        fetchAPIPokemon()
    }, [])
    

    function renderPokemon(pokeData){
        setInfo( currentList => [...currentList, pokeData]);
    }
    

    return (
        <div className="app-contaner">
            <h1>Pokemon Cards</h1>
            <div className="pokemon-container">
            <div className="all-container">
                {info.map( (el, index) => 
                <PokemonCard
                    key={index}
                    id={el.id}
                    image={el.sprites.other.dream_world.front_default}
                    name={el.name}
                    type={el.types[0].type.name}
                />)}
                
            </div>
            </div>
        </div>
        );
}

export default App
