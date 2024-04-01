import React, {useContext} from 'react'
import { Button } from '../botton/button'
import {ThemeContext, themes} from '../../contexts/theme-context'

export const ThemeTogglerIcon = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    return(
       <Button onClick={() => setTheme(theme === themes.sun ? themes.moon : themes.sun) } />
    )

}