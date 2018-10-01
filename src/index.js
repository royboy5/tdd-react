import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import Store from './Store'
import Home from './pages/Home'

const App = () => (
  <Store>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Store>
)

render(<App />, document.querySelector('#root'))

registerServiceWorker()
