import React, { useContext } from 'react'

import Header from '../../components/header'

import { ThemeContext } from '../../contexts/theme-context'
import { Main } from '../../components/main'

function Home() {

    const theme = useContext(ThemeContext)
    return (
        <body style={{backgroundColor: theme.theme.background, paddingBottom: 20}}>
            <Header/>
            <Main/>
        </body>
    )
}

export default Home
