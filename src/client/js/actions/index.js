import constants from '../constants'

export default {
    updateClickCount: (num) => {
        return {
            type: constants.UPDATE_CLICK_COUNT,
            payload: num
        }
    }
}
