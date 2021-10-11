import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Film from '../Pages/Film'

const Router = () => {
    return (

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/film">
                <Film />
            </Route>
        </Switch>
    )
}

export default Router
