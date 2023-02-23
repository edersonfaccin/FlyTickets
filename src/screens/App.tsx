import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from '../redux/appReducer'
import Navigator from './Navigator'

const store = createStore(appReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App