import './style.css'
import logo from '../../assets/Pokeball.svg'
import React, {useContext} from 'react'
import { ThemeTogglerIcon } from '../theme-toggler/theme-toggler-icons'
import { ThemeContext } from '../../contexts/theme-context'



function Header() {
    const theme = useContext(ThemeContext)

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
                            <option value="">Selecione um tipo de pokemon</option>
                            <option value="">Agua</option>
                            <option value="">Fogo</option>
                            <option value="">Grama</option>
                        </select>
                        <button type='submit' style={{color: theme.theme.color}}>Buscar</button>
                    </form>
                </nav>
            </div>
        </header>
    )
}


export default Header