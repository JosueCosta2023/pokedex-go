import { createContext, useState } from "react"
import {FiSun, FiMoon} from 'react-icons/fi'

export const themes = {
    sun: {
        color: '#DC0A2D',
        background: '#DC0A2D',
        iconTheme: <FiSun size={18} color="white"/>
    },

    moon: {
        color: '#000',
        background: '#393D46',
        iconTheme: <FiMoon size={18} color="white"/>
    }
}

export const ThemeContext = createContext({})


export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.sun)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}