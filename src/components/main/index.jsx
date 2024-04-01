import './style.css'
import pokemonDefault from '../../assets/pokemon.svg'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <main className='container-pokemons'>
            <Link to={'/detail'}>
                <div className='card'>
                    <span className='card-id'>#001</span>
                    <img src={pokemonDefault} alt="pokemon" className='card-img' />
                    <p className='card-name'>Mew Two</p>
                </div>
            </Link>
        </main>
    )
}

export default Main