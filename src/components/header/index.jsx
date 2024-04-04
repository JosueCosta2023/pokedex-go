import './style.css'
import logo from '../../assets/Pokeball.svg'
import { ThemeTogglerIcon } from '../theme-toggler/theme-toggler-icons'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { getTypesPokemons } from '../../service/getApi'

function Header() {
    const theme = useContext(ThemeContext)
    const [pokemonsType, setPokemonType] = useState([])
    const [selectedType, setSelectedType] = useState([])

    useEffect(() => {
        async function fetchTypePokemons() {
            try {
                const response = await getTypesPokemons()
                setPokemonType(response)
            } catch (error) {
                console.error("Falha ao buscar os tipos de pokemons")
            }
        }
        fetchTypePokemons()
    }, [])

    const loadType = (e) => {
        setSelectedType(e.target.value)
    }

    const fetchPokemonsTypes = () => {
        console.log(selectedType)
        return response
    }

    return (
        <header className='container-header'>
            <div className='content-header'>
                <div className='header-logo'>
                    <div className='logo'>
                        <img src={logo} alt="Pokeball" />
                        <h3>Pokedéx</h3>
                    </div>
                    <ThemeTogglerIcon />
                </div>
                <nav className='header-navigation'>
                    <form action="">
                        <select
                            name="type"
                            id="type"
                            onChange={loadType}
                        >
                            <option value="all">Selecione um tipo de pokemon</option>
                            {pokemonsType && pokemonsType.map((type, index) => (
                                <option key={index} value={type.name}>{type.name}</option>
                            ))}
                        </select>
                        <button style={{ color: theme.theme.color }} onClick={fetchPokemonsTypes}>Buscar</button>
                    </form>
                </nav>
            </div>
        </header>
    )
}


export default Header