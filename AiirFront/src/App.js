import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UploadTabs from './UploadPage'
import UploadPage from './UploadPage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Loginscreen from './Loginscreen'
injectTapEventPlugin();


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadPage:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<UploadPage username='Maxwell'/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.UploadPage}
      </div>
    );
  }
}

const style = {
  margin: 12,
}

export default App;
