import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import createStoreWithMiddleware from './store'
import App from './components/App/App'

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <App />
    </Provider>,
    document.getElementById('app')
)
