import constants from '../constants'

export default {
    updateClickCount: (num) => {
        return {
            type: constants.UPDATE_CLICK_COUNT,
            payload: num
        }
    },
    getChuckNorrisJoke: (payload) => {
        console.log(payload)
        return {
            type: constants.GET_CHUCK_NORRIS_JOKE,
            payload
        }
    }
}
