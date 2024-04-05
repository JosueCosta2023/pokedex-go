import './style.css'
import { Link } from 'react-router-dom'

import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import axios from 'axios'

export function Main() {

    const [pokemons, setPokemon] = useState([])
    const [nextUrl, setNextUrl] = useState("");
    const theme = useContext(ThemeContext)
    
    useEffect(() => {
        fetchPokemonData("https://pokeapi.co/api/v2/pokemon?limit=20");
    }, []);

    const fetchPokemonData = async (url) => {
        try {
            const response = await axios.get(url);
            const { results, next } = response.data;
            const pokemonPromises = results.map(async (result) => {
                const pokemonResponse = await axios.get(result.url);
                return pokemonResponse.data;
            });
            const pokemonData = await Promise.all(pokemonPromises);
            setPokemon((prevData) => [...pokemons ,...pokemonData]);
            setNextUrl(next);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };

    const loadMorePokemon = async () => {
        if (nextUrl) {
            fetchPokemonData(nextUrl);
        }
    }


    return (
        <main className='container-pokemons'>
            {
                pokemons.map((pokemon, index) => (
                    <Link to={`/detail/${pokemon.id}`} key={index}>
                        <div className='card'>
                            <span className='card-id'>#0{pokemon.id}</span>
                            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="pokemon" className='card-img' />
                            <p className='card-name'>{pokemon.name}</p>
                        </div>
                    </Link>
                ))

            }
            <button style={{ backgroundColor: theme.theme.background }} onClick={loadMorePokemon}>Carregar Mais</button>
        </main>
    )
}

