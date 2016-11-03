import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>o
        <DatePicker hintText="Portrait Dialog" />
      </div>
    );
  }
}

export default Home;
