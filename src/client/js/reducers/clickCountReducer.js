import constants from '../constants'

const INITIAL_STATE = {
    data: {
        counter: 0
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case constants.UPDATE_CLICK_COUNT:
        return {
            ...state,
            data: {
                ...state.data,
                counter: action.payload + 1
            }
        }
    default:
        return state
    }
}
