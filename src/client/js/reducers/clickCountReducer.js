import constants from '../constants'

const INITIAL_STATE = {
    counter: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case constants.UPDATE_CLICK_COUNT:
        return {
            ...state,
            counter: state.counter + 1
        }
    default:
        return state
    }
}
