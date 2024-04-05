import './style.css'
import logo from '../../assets/Pokeball.svg'
import { ThemeTogglerIcon } from '../theme-toggler/theme-toggler-icons'

function Header() {
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
            </div>
        </header>
    )
}


export default Header