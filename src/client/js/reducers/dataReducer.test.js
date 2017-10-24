import dataReducer from './dataReducer'
import ACTIONS from '../constants'

test('should setup default state', () => {
    const state = dataReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        data: {
            counter: 0,
            joke: ''
        }
    })
})

test('should increase click count', () => {
    const currentState = {
        data: {
            counter: 0,
            joke: ''
        }
    }

    const state = dataReducer(currentState, {
        type: ACTIONS.UPDATE_CLICK_COUNT,
        payload: 0
    })

    expect(state).toEqual({
        data: {
            counter: 1,
            joke: ''
        }
    })
})

test('should return a Chuck Norris joke', () => {
    const currentState = {
        data: {
            counter: 10,
            joke: ''
        }
    }

    const state = dataReducer(currentState, {
        type: ACTIONS.GET_CHUCK_NORRIS_JOKE,
        payload: 'Chuck Norris is the reason Waldo is hiding.'
    })

    expect(state).toEqual({
        data: {
            counter: 10,
            joke: 'Chuck Norris is the reason Waldo is hiding.'
        }
    })
})
