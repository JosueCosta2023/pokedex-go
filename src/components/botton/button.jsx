import React, {useContext} from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {

    const {theme} = useContext(ThemeContext)

    return(
        <button {...props}
        >{theme.iconTheme}</button>
    )
}