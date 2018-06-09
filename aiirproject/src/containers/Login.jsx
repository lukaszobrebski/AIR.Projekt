import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SendFile from '../components/SendFile';
import '../style/base.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLogged: false
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className='container'>
        <SendFile />
        <div className='container container__login'>
        <h1>Login</h1>
          <form className='container container__login--form'>
            <input type='text'/>
            <input type='password'/>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
          <Link to='/register'>Register</Link>
          <Link to='/create'>Create</Link>
          <Link to='/view'>View</Link>
          
        </div>
      </div>
    )
  }
}