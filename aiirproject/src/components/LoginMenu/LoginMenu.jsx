import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const LoginMenu = props => {
  const handleClick = action => {
    return props.display(action)
  }
    return (
    <div className='Menu'>
      <span className='Menu__Link' onClick={() => handleClick('login')}>Test_Login</span>
      <span className='Menu__Link' onClick={() => handleClick('register')}>Test_Register</span>
    </div>)
}

export default LoginMenu;