import React from 'react';
import Row from '../Row';
import './BaseTable.scss';

const BaseTable = ({tasks}) => {
  if(tasks.length){
    return (
      <div className='Table'>
        <h1>Tasks</h1>
        <div className='Table__Labels'>
          <span>ID</span>
          <span>Query</span>
          <span>Status</span>
          <span>User ID</span>
          <span>Start</span>
          <span>End</span>
          <span>Occurance</span>
        </div>
        {tasks.map((item, key) =>  <Row key={key} item={item} />)}
      </div>
    )
  }
  return (
    <div className='Table'>
      <h1>Tasks not found</h1>
    </div>
  )
}

export default BaseTable;