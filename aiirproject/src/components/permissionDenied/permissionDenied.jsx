import React, {Component} from 'react'

const permissionDenied = props => {

  return (
    <div className='denied'>
      <h1>Permission Denied!</h1>
      <h2>Log In first!</h2>
    </div>
  )
}

export default permissionDenied;