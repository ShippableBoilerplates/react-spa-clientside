import React, {PureComponent} from 'react'
import {header, title} from './Header.styles'

export default class Header extends PureComponent {
    render() {
        return (
            <div {...header}>
                <h1 {...title}>Ship a React SPA!</h1>
            </div>
        )
    }
}
