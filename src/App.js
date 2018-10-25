import React, { Component } from 'react'
import { createStore } from 'redux'
import counterReducer from './reducer'
import { Provider } from 'react-redux'

import Counter from './Counter'
import DisplayCounter from './DisplayCounter'
import Ola from './Ola'

let store = createStore(counterReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <DisplayCounter />
          <Ola nome='Thiago' />
        </div>
      </Provider>
    )
  }
}

export default App
