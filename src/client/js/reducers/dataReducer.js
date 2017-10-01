import ACTIONS from '../constants'

const INITIAL_STATE = {
    data: {
        counter: 0,
        joke: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case ACTIONS.UPDATE_CLICK_COUNT:
        return {
            ...state,
            data: {
                ...state.data,
                counter: action.payload + 1
            }
        }
    case ACTIONS.GET_CHUCK_NORRIS_JOKE:
        return {
            ...state,
            data: {
                ...state.data,
                joke: action.payload
            }
        }
    default:
        return state
    }
}
