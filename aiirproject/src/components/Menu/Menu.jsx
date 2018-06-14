import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = props => {
  const handleClick = action => {
    return props.display(action)
  }
  if(true){
    return (
    <div className='Menu'>
      <span className='Menu__Link' onClick={() => handleClick('create')}>Test_Create</span>
      <Link className='Menu__Link Menu__Link--logout' to='/'>Logout</Link>
    </div>)
  }
}

export default Menu;