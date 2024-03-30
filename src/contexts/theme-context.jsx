import { createContext } from "react"
import {FiSun, FiMoon} from 'react-icons/fi'

export const themes = {
    sun: {
        color: '#DC0A2D',
        background: '#DC0A2D',
        iconTheme: <FiSun size={18} color="white"/>
    },

    moon: {
        color: '#000',
        backhround: '#000',
        iconTheme: <FiMoon size={18} color="white"/>
    }
}

export const ThemeContext = createContext({})


export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}