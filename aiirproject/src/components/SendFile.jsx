import React, { Component } from 'react';
import apiClient from '../api/apiClient'
export default class SendFile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      file: null,
      isUploaded: false,
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
    userId: null,
    keyword: null,
    taskName: null,
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

  render() {
    const { isUploaded } = this.state;
    if(isUploaded) {
      return (
        <p>DONE!!</p>
      )
    }
    return(
      <div className='SendFile'>
      <button label='Import key' onClick={ () => document.getElementById('getFile').click() }>
        Send file
      </button>
        <input 
          type="file" 
          id="getFile" 
          style={{ display: 'none' }} 
          onChange={this.getFile}
        />
      </div>
    )
  }

}