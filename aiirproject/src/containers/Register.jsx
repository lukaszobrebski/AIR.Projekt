import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../style/base.scss';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials:{
        userName:'',
        password:''
      }
     }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className='container'>
        <div className='container container__login'>
        <h1>Register</h1>
          <form className='container container__login--form'>
            <input type='text'/>
            <input type='password'/>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
          <Link to='/'>Login</Link>
        </div>
      </div>
    )
  }
}