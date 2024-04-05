import './style.css'
import { Link } from 'react-router-dom'
import { getPokemons, getPokemonsForTypes } from '../../service/getApi'
import React, { useEffect, useState } from 'react'


export function Main() {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsViaType, SetPokemonsViaType] = useState([])

    useEffect(() => {

        const fetchPokemons = async () => {
            try {
                const response = await getPokemons()
                setPokemons(response)
            } catch (error) {
                console.error("Erro ao buscar dados inicais do pokemon.", error)
            }
        }
        fetchPokemons()
    }, [])

    useEffect(()=>{
        const fetchPokemonType = async () => {

            const responseType = await getPokemonsForTypes()
            console.log("Interno")
            console.log(responseType)
            SetPokemonsViaType(responseType)
        }
        fetchPokemonType()
    }, [])

    // console.log("Final")
    // console.log(pokemonsViaType)

    return (
        <main className='container-pokemons'>
            {

                pokemonsViaType && pokemonsViaType.length > 0

                    ?
                    pokemonsViaType.map((pokemon, index) => (
                        <Link to={`/detail/${pokemon.id}`} key={index}>
                            <div className='card'>
                                <span className='card-id'>#0{pokemon.id}</span>
                                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon" className='card-img' />
                                <p className='card-name'>{pokemon.name}</p>
                            </div>
                        </Link>))
                    :
                    pokemons.map((pokemon, index) => (
                        <Link to={`/detail/${pokemon.id}`} key={index}>
                            <div className='card'>
                                <span className='card-id'>#0{pokemon.id}</span>
                                <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon" className='card-img' />
                                <p className='card-name'>{pokemon.name}</p>
                            </div>
                        </Link>
                    ))

            }
        </main>
    )
}

