import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class Layout extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Login"
          iconElementLeft={
            <IconButton
              onClick={this.props.toggleDrawer}>
                <NavigationMenu />
            </IconButton>
          }
          iconElementRight={this.props.iconElementRight}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
