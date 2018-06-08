import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SendFile from '../components/SendFile';
import '../style/base.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className='container'>
        <h1>Login</h1>
        <SendFile />
        <div className='container container__login'>
          <form className='container container__login--form'>
            <input type='text'/>
            <input type='password'/>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    )
  }
}