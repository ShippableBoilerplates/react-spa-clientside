import {takeEvery} from 'redux-saga'
import {call, put} from 'redux-saga/effects'
import {fetchAJoke} from '../api'
import ACTIONS from '../constants'

function* getChuckNorrisJokeAsync(action) {
    try {
        const joke = yield call(fetchAJoke)
        yield put({type: ACTIONS.GET_CHUCK_NORRIS_JOKE, payload: joke})
    } catch (error) {
        console.log(error)
    }
}

function* watchClick() {
    yield takeEvery(ACTIONS.UPDATE_CLICK_COUNT, getChuckNorrisJokeAsync)
}

export default function* rootSaga() {
    yield [
        watchClick()
    ]
}
