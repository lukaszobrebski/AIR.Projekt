import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = props => {
  const handleClick = action => {
    return props.display(action)
  }

  return (
    <div className='Menu'>
      <Link className='Menu__Link' to='/register'>Register</Link>
      <Link className='Menu__Link' to='/create'>Create</Link>
      <span className='Menu__Link' onClick={() => handleClick('create')}>Test_Create</span>
      <span className='Menu__Link' onClick={() => handleClick('register')}>Test_Register</span>
      <Link className='Menu__Link Menu__Link--logout' to='/'>Logout</Link>
    </div>
  )
}

export default Menu;