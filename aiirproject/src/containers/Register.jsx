import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../style/base.scss';
import apiClient from '../api/apiClient';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials:{
        userName:''
      },
      isLogged: false
     }
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    apiClient.register(data)
    .then(response => response === true ? this.setState({isLogged: true, userName: data.userName}) : null)
    .catch(error => {})
  }

  render() {
    return(
      <div className='container'>
        <div className='container container__login'>
        <h1>Register</h1>
          <form className='container container__login--form' onSubmit={this.handleSubmit}>
            <input type='text'/>
            <input type='password'/>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
          {this.state.isLogged ? <Redirect to='/view'/> : null}
          <Link to='/'>Login</Link>
        </div>
      </div>
    )
  }
}