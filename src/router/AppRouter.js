import React from 'react'
import HomePage from "../components/HomePage";
import '../styles/styles.scss' 

import { HashRouter, Route, Routes } from 'react-router-dom'
const AppRouter = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} exact={true} />
        </Routes>
    </HashRouter>
)

export default AppRouter
