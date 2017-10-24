import {default as action} from './'
import ACTIONS from '../constants'

test('Should setup updateClickCount action', () => {
    const payload = 5
    const result = action.updateClickCount(payload)
    expect(result).toEqual({
        type: ACTIONS.UPDATE_CLICK_COUNT,
        payload
    })
})

test('Should setup getChuckNorrisJoke action', () => {
    const payload = 'When Chuck Norris was born he drove his mom home from the hospital.'
    const result = action.getChuckNorrisJoke(payload)
    expect(result).toEqual({
        type: ACTIONS.GET_CHUCK_NORRIS_JOKE,
        payload
    })
})
