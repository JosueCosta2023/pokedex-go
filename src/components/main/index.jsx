import './style.css'
import { Link } from 'react-router-dom'
import { getPokemons } from '../../service/getApi'

import React, {useEffect, useState} from 'react'

export function Main() {

    const [pokemons, setPokemons] = useState([])

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

    
    return (
        <main className='container-pokemons'>
            {pokemons.map((pokemon, index) => (
                <Link to={`/detail/${pokemon.id}`} key={index}>
                    <div className='card'>
                        <span className='card-id'>#0{pokemon.id}</span>
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon" className='card-img' />
                        <p className='card-name'>{pokemon.name}</p>
                    </div>
                </Link>
            ))}
        </main>
    )
}

