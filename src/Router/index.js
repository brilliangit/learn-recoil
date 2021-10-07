import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
