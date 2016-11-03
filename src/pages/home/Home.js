import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Layout from '../../layout';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popoverOpen: false
    }
  }

  openPopover = (event) => {
    event.preventDefault();
    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget
    })
  }

  closePopover = () => {
    this.setState({
      popoverOpen: false
    })
  }

  render() {
    return (
      <Layout
        className="Home"
        toggleDrawer={this.props.route.toggleDrawer}
        iconElementRight={
          <IconButton onClick={this.openPopover}>
            <NavigationMoreVert />
          </IconButton>
        }>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <Popover
          open={this.state.popoverOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.closePopover}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </Layout>
    );
  }
}

export default Home;
