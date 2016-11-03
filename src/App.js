import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiTheme from './muiTheme';

import {Home} from './pages';
import Sidebar from './sidebar'

injectTapEventPlugin();

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Router history={hashHistory}>
            <Route path="/" component={Home} toggleDrawer={this.toggleDrawer}></Route>
          </Router>
          <Sidebar open={this.state.sidebarOpened} toggleDrawer={this.toggleDrawer}/>
        </div>
      </MuiThemeProvider>
      );
  }
}

export default App;
