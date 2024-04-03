import './style.css'
import pokemonDefault from '../../assets/pokemon.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../service/getApi'

function Main() {

    const [pokemons, setPokemons] = useState([])
  
    useEffect(() => {
        
        const fetchPokemons = async () => {
            try {
                const response = await getPokemons()
                setPokemons(response)
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
                        <span className='card-id'>#0{index}</span>
                        <img src={pokemonDefault} alt="pokemon" className='card-img' />
                        <p className='card-name'>{pokemon.name}</p>
                    </div>
                </Link>

                ))}
        </main>
    )
}

export default Main