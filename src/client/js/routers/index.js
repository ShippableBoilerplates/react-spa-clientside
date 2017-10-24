import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
import App from '../components/App/App'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>
)
