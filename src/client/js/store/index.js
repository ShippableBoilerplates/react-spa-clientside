import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {dataReducer} from '../reducers'
import rootSaga from '../sagas'

export default function createStoreWithMiddleware() {
    const rootReducer = combineReducers({
        root: dataReducer
    })

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)

    return store
}
