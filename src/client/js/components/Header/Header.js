import React, {PureComponent} from 'react'
import {css} from 'glamor'

const header = css({
    height: '10vh',
    background: '#4b586e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const title = css({
    margin: '0',
    color: '#DDDDDD',
    fontWeight: 700,
    fontSize: '2rem'
})

export default class Header extends PureComponent {
    render() {
        return (
            <div {...header}>
                <h1 {...title}>Ship a React SPA!</h1>
            </div>
        )
    }
}
