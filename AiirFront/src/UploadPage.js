import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBarExampleComposition from './appbar';
import ProgressBar from './ProgressBar';
import TableExampleComplex from './historyTable';
import FileUpload from './FileUpload';
import TabsExampleControlled from './UploadTabs';

class UploadPage extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBarExampleComposition username={this.state.username}/>
          <br/>
            <div className='ProgressBar'>
                <ProgressBar />
            </div>
            <br/>
            <div className='Content'>
            {/*<TableExampleComplex />
            <FileUpload/>
            TODO - Content pane (Tast History, Certain task results, New Task */}
              <TabsExampleControlled username={this.state.username}/>
            
            </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default UploadPage;