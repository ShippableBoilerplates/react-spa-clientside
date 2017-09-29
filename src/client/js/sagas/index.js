import {takeEvery} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import constants from '../constants'
import fetch from 'isomorphic-fetch'

// worker saga
export function * getChuckNorrisJokeAsync(action) {
    try {
        const apiCall = () => {
            return fetch('http://api.icndb.com/jokes/random')
                .then(res => res.json())
                .then(res => res.value.joke)
        }
        const response = yield call(apiCall)

        yield put({type: constants.GET_CHUCK_NORRIS_JOKE, payload: response})
    } catch (error) {
        console.log(error)
    }
}

// watcher saga - spawn new async on each ACTION
export function * watchClick() {
    yield takeEvery(constants.UPDATE_CLICK_COUNT, getChuckNorrisJokeAsync)
}

// root saga
// single entry point to start all sagas at once

export default function * rootSaga() {
    yield [
        watchClick()
    ]
}
