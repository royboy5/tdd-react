import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'

import reducers from './reducers'

import Home from './pages/Home'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

render(<App />, document.querySelector('#root'))

registerServiceWorker()
