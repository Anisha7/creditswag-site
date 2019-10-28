import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home';

import reducers from './reducers';
const store = createStore(reducers)

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <div className="wrapper">
            <Router>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
            </Router>
          </div>
        </Provider>
    )
  }
}

export default App;
