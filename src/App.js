import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import {Home} from './pages';
import Sidebar from './sidebar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpened: false
    }
    // TODO: Replace with some kind of State Manager
  }

  toggleDrawer = () => {
    // Correct
    this.setState((prevState, props) => ({
      sidebarOpened: !prevState.sidebarOpened
    }));
  }

  render() {
    return (
        <div>
          <Router history={hashHistory}>
            <Route path="/" component={Home} toggleDrawer={this.toggleDrawer}></Route>
          </Router>
          <Sidebar open={this.state.sidebarOpened} toggleDrawer={this.toggleDrawer}/>
        </div>
      );
  }
}

export default App;
