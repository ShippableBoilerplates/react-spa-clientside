import React, {PureComponent} from 'react'
import Header from '../Header/Header'
import Clicker from '../Clicker/Clicker'

import {css} from 'glamor'
import 'glamor/reset'

css.global(
    'html', {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400'
    }
)

const wrapper = css({
    height: '100vh',
    background: '#DDDDDD'
})

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
