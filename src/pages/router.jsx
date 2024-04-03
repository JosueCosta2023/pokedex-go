import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./home"
import { Detail } from "./details"

export function Routers(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </Router>
    )
}