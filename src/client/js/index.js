import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import AppRouter from './routers'
import createStoreWithMiddleware from './store'

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
)
