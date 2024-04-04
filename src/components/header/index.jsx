import './style.css'
import logo from '../../assets/Pokeball.svg'
import React, {useContext, useEffect, useState} from 'react'
import { ThemeTogglerIcon } from '../theme-toggler/theme-toggler-icons'
import { ThemeContext } from '../../contexts/theme-context'
import { getTypesPokemons } from '../../service/getApi'

function Header() {
    const theme = useContext(ThemeContext)
    const [pokemonsType, setPokemonType] = useState([])
    const [selectedType, setSelectedType] = useState()

    useEffect(() => {
        async function fetchTypePokemons(){
            try {
                const response = await getTypesPokemons()
                setPokemonType(response)
                
            } catch (error) {
                console.error("Falha ao buscar os tipos de pokemons")
            }
        }

        fetchTypePokemons()

    }, [])

    const handleType = (e) => {
        setSelectedType(e.target.value)
        console.log(selectedType)
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
                        <select name="type" id="type">
                            <option value="all">Selecione um tipo de pokemon</option>
                            {pokemonsType && pokemonsType.map((type, index) => (
                                <option key={index} value={type.name}>{type.name}</option>
                            ))}
                        </select>
                        <button type='submit' style={{color: theme.theme.color}} onClick={handleType}>Buscar</button>
                    </form>
                </nav>
            </div>
        </header>
    )
}


export default Header