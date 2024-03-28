import './style.css'
import pokemonDefault from '../../assets/pokemon.svg'

function Main(){
    return(
        <main className='container-pokemons'>
            <div className='card'>
                <span className='card-id'>#001</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#002</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#003</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#004</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#005</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#006</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#007</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#008</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#009</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
            <div className='card'>
                <span className='card-id'>#010</span>
                <img src={pokemonDefault} alt="pokemon" className='card-img' />
                <p className='card-name'>Nome do Pokemon</p>
            </div>
        </main>
    )
}

export default Main