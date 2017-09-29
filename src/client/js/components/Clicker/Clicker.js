import actions from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {app, container, logo, counter} from './Clicker.styles'
import ReactLogo from '../../../img/react.svg'

class Clicker extends Component {
    static propTypes = {
        updateClickCount: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    }

    handleClick() {
        this.props.updateClickCount()
    }
    render() {
        return (
            <div {...app}>
                <div {...container}>
                    <img {...logo}
                        src={ReactLogo}
                        onClick={event => this.handleClick()}
                    />
                    <p {...counter}>
                        You split the atom {this.props.counter} times!
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        counter: state.clickCount.counter
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(Clicker)
