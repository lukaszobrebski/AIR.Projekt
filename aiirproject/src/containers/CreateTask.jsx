import React, { Component } from 'react';
import '../style/base.scss';
import { Link, Redirect } from 'react-router-dom';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className='container'>
        <div className='container container__login'>
          <h1>CreateTask</h1>
          <form className='container container__login--form'>
              <label for='taskname'>Taskname</label>
              <input id='taskname' type='text'/>
              <label for='query'>Query</label>
              <input id='query' type='text'/>
              <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
            <Link to='/register'>Register</Link>
          <Link to='/'>Login</Link>
          <Link to='/view'>View</Link>
        </div>
      </div>
    )
  }
}