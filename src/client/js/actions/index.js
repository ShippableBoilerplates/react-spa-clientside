import constants from '../constants'

export default {
    updateClickCount: (msg) => {
        return {
            type: constants.UPDATE_CLICK_COUNT
        }
    }
}
