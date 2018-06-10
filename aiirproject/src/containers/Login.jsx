import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import '../style/base.scss';
import apiClient from '../api/apiClient'

export default class Login extends Component {
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
    apiClient.login(data)
    .then(response => response === true ? this.setState({isLogged: true}) : null)
    .catch(error => {})
  }

  render() {
    return(
      <div className='container'>
        <div className='container container__login'>
        <h1>Login</h1>
          <form className='container container__login--form' onSubmit={this.handleSubmit}>
            <label for='user'>Username</label>
            <input type='text' id='user'/>
            <label for='pass'>Password</label>
            <input type='password' id='pass'/>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
          {this.state.isLogged ? <Redirect to='/view'/> : null}
          <Link to='/register'>Register</Link>
          <Link to='/create'>Create</Link>
          <Link to='/view'>View</Link>
          
        </div>
      </div>
    )
  }
}