import React, { Component } from 'react';
import apiClient from '../api/apiClient'
export default class SendFile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      file: null,
      userID:'',
      keyword:'',
      taskname:''
    };
  }

  componentDidMount() {
    setInterval(() => this.checkStatus(), 1000);
  }

  checkStatus = () => {
    console.log('check status');
  }

  getFile = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const onLoad = ev => {
      //console.log(ev.target.result);
      return this.sendFile(ev.target.result)
    }
    reader.addEventListener('load', onLoad, false);
    reader.readAsDataURL(file);
  }

  prepareSend = file => ({
    userId: this.state.userID,
    keyword: this.state.keyword,
    taskName: this.state.tasknames,
    file
  })

  sendFile = fileObject => {
    const data = this.prepareSend(fileObject);
    //console.log(apiClient)
    apiClient.sendFile(data)
    .then(response => 
      response === true ? this.setState({ isUploaded: true }) : null
    )
    .catch(error => {

    })
  }
  /*
      if(isUploaded) {
       return (
        <p>DONE!!</p>
      )
    }*/
    /*<button label='Import key' onClick={ () => document.getElementById('getFile').click() }>
        Send file
      </button>*/
  render() {
    return(
      <div className='SendFile'>
        <input 
          type="file" 
          id="getFile" 
          onChange={this.getFile}
        />
      </div>
    )
  }

}