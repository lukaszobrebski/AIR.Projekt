import React, {Component} from 'react'
import axios, {post} from 'axios'
import { RaisedButton } from 'material-ui';
import { TextField } from 'material-ui';
import {AppBar} from 'material-ui'
import {Tabs, Tab} from 'material-ui/Tabs';
import Dropzone from 'react-dropzone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


var apiBaseUrl = "http://localhost:4000/api/";


class FileUpload extends React.Component{

    constructor(props){
        super(props);
        this.state={
          filesPreview:[],
          filesToBeSent:[],
    }}

    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        var filesToBeSent=this.state.filesToBeSent;
          filesToBeSent.push(acceptedFiles);
          var filesPreview=[];
          for(var i in filesToBeSent){
            filesPreview.push(<div>
              {filesToBeSent[i][0].name}
              <MuiThemeProvider>
              <a href="#"><FontIcon
                className="material-icons customstyle"
                color={blue500}
                styles={{ top:10,}}
                onClick={(event) => this.handleCloseClick(event,i)}
              >clear</FontIcon></a>
              </MuiThemeProvider>
              </div>
            )
          this.setState({filesToBeSent,filesPreview});
  
        // console.log('Rejected files: ', rejectedFiles);
  }
}


    handleCloseClick(event,index){
        // console.log("filename",index);
        var filesToBeSent=this.state.filesToBeSent;
        filesToBeSent.splice(index,1);
        // console.log("files",filesToBeSent);
        var filesPreview=[];
        for(var i in filesToBeSent){
          filesPreview.push(<div>
            {filesToBeSent[i][0].name}
            <MuiThemeProvider>
            <a href="#"><FontIcon
              className="material-icons customstyle"
              color={blue500}
              onClick={(event) => this.handleCloseClick(event,i)}
            >clear</FontIcon></a>
            </MuiThemeProvider>
            </div>
          )
        }
        this.setState({filesToBeSent,filesPreview});
    }


    render(){
        return(

        <center>
            <Dropzone onDrop={(files) => this.onDrop(files)}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <div>
            Files to be printed are:
            {this.state.filesPreview}
            </div>
        </center>
             
        )
    }
};


export default FileUpload