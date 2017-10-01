import ACTIONS from '../constants'

export default {
    updateClickCount: (num) => {
        return {
            type: ACTIONS.UPDATE_CLICK_COUNT,
            payload: num
        }
    },
    getChuckNorrisJoke: (payload) => {
        return {
            type: ACTIONS.GET_CHUCK_NORRIS_JOKE,
            payload
        }
    }
}
