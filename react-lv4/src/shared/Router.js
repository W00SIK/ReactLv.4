import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import CreateAccount from '../pages/CreateAccount'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<LoginPage/>} />
                <Route path ="/createaccount" element={<CreateAccount/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router