import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchAJoke} from '../api'
import ACTIONS from '../constants'

export function* getChuckNorrisJokeAsync() {
    try {
        const apiCall = yield call(fetchAJoke)
        if (apiCall.status === 200) {
            const data = yield apiCall.json()
            yield put({
                type: ACTIONS.GET_CHUCK_NORRIS_JOKE,
                payload: data.joke.fact
            })
        }
    } catch (error) {
        yield put({
            type: ACTIONS.GET_CHUCK_NORRIS_JOKE,
            payload: 'Unable to fetch a joke from the public API'
        })
    }
}

export function* watchClick() {
    yield takeEvery(ACTIONS.UPDATE_CLICK_COUNT, getChuckNorrisJokeAsync)
}

export default function* rootSaga() {
    yield [watchClick()]
}
