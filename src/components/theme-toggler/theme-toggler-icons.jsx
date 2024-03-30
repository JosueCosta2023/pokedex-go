import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

export const ThemeTogglerIcon = () => {

    const {themes} = useContext(ThemeContext)
    const [isSunMode, setIsSunMode] = useState(false)

    const toggleMode = () => {
        setIsSunMode(prevMode => !prevMode)
    }
    return(
        <button onClick={toggleMode}>
            {isSunMode ? themes.moon.iconTheme : themes.sun.iconTheme}
        </button>
    )

}