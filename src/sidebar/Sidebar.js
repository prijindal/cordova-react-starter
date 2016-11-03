import React, { Component } from 'react';
import './Sidebar.css'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Sidebar extends Component {
  render() {
    return (
      <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={this.props.toggleDrawer}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default Sidebar;
