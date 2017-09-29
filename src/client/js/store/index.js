import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {clickCountReducer} from '../reducers'

const rootReducer = combineReducers({
    clickCount: clickCountReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store
