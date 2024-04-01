import React, { useContext } from 'react'

import Header from '../../components/header'
import Main from '../../components/main'
import { ThemeContext } from '../../contexts/theme-context'

function Home() {

    const theme = useContext(ThemeContext)
    return (
        <body style={{backgroundColor: theme.theme.background}}>
            <Header/>
            <Main/>
        </body>
    )
}

export default Home
