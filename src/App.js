import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './home';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}></Route>
        </Router>
      );
  }
}

export default App;
