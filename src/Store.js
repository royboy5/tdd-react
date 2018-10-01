import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const Store = props => {
  const children = props.children
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>{children}</Provider>
  )
}

Store.propTypes = {
  children: PropTypes.element.isRequired
}

export default Store
