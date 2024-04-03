import './style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../service/getApi'
import axios from 'axios'

function Main() {

    const [pokemons, setPokemons] = useState([])
  
    useEffect(() => {
        
        const fetchPokemons = async () => {
            try {
                const response = await getPokemons()
                const promises = response.map(async (pokemon) => {
                    const res = await axios.get(pokemon.url)
                    return res.data
                })

                const data = await Promise.all(promises)
                setPokemons(data)
                
            } catch (error) {
                console.error("Erro ao buscar os pokemons", error)
            }
        }
        fetchPokemons()
    }, [])
    
    return (
        <main className='container-pokemons'>
                {pokemons.map((pokemon, index) => (
                <Link to={'/detail'} key={index}>
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

export default Main