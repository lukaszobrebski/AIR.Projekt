import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  
  render() {
    return (
      <div>        
        <AppBar
          title={"Logged as: " + this.props.username}   
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;