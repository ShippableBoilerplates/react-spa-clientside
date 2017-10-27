import 'babel-polyfill'
import {takeEvery, call} from 'redux-saga/effects'
import {watchClick, getChuckNorrisJokeAsync} from './'
import {fetchAJoke} from '../api'
import ACTIONS from '../constants'

test('an update click should trigger async saga', () => {
    const gen = watchClick()
    const nextStep = gen.next(ACTIONS.UPDATE_CLICK_COUNT).value
    const expectedYield = takeEvery(
        ACTIONS.UPDATE_CLICK_COUNT,
        getChuckNorrisJokeAsync
    )

    expect(nextStep).toEqual(expectedYield)
})

test('the async saga should yield the API call', () => {
    const gen = getChuckNorrisJokeAsync()
    const nextStep = gen.next().value
    const expectedYield = call(fetchAJoke)

    expect(nextStep).toEqual(expectedYield)
})
