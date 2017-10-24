import React, {PureComponent} from 'react'
import Header from '../Header/Header'
import Clicker from '../Clicker/Clicker'

import {css} from 'glamor'
import 'glamor/reset'
import {wrapper} from './App.styles'

css.global(
    'html', {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400'
    }
)

export default class App extends PureComponent {
    render() {
        return (
            <div {...wrapper}>
                <Header />
                <Clicker />
            </div>
        )
    }
}
