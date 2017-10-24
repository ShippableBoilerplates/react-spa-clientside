import actions from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {app, container, logo, counter, joke} from './Clicker.styles'
import ReactLogo from '../../../img/react.svg'

export class Clicker extends Component {
    static propTypes = {
        updateClickCount: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired,
        joke: PropTypes.string.isRequired
    }

    handleClick() {
        const {updateClickCount, counter} = this.props
        updateClickCount(counter)
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
                    <p {...joke}>
                        {this.props.joke}
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        counter: state.root.data.counter,
        joke: state.root.data.joke
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(Clicker)
