import React, {Component} from 'react'
import './Register.scss';
const Register = props => {

  const closeContainer = (event) => {
    event.preventDefault();
    return props.close();
  }

  return (
    <div className='overlay'>
      <div className='Register'>
        <div className='Register__Header'>
          <h1>Register</h1>
          <button onClick={(event) => closeContainer(event)}>Log In</button>
        </div>
        <div className='Register__Main'>
        <form className='Register__Form' onSubmit={props.onSubmit}>
          <label for='username'>Username</label>
          <input type='text' name='username' onChange={props.onChangeTaskName} value={props.taskName} />
          <label for='pass'>Password</label>
          <input type='password' name='pass' onChange={props.onChangeQuery} value={props.query} />
          <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register;