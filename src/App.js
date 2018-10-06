import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'
import {history} from './store/store'

import ProductSearchScreen from './screen/product-search-screen'
import ProductViewScreen from './screen/product-view-screen'
import LoginScreen from './screen/login-screen'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Router history={history}>
                <Switch>
                  <Route exact path='/' component={ProductSearchScreen}/>
                  <Route exact path='/products/add' component={ProductViewScreen}/>
                  <Route exact path='/products/:type/:id' component={ProductViewScreen}/>
                  <Route exact path='/login' component={LoginScreen}/>
                </Switch>
              </Router>
            </PersistGate>
          </Provider>
        </React.Fragment>
    )
  }
}

export default App
