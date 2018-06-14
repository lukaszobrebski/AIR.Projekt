import React from 'react';
import './Row.scss'
const Row = ({ item }) => {
  const { taskId, query, status, userId, startTime, endTime, occurance } = item;
  return (
    <div className='Row'>
      <span className='Col'>{ taskId ? taskId : 'N/A' }</span>
      <span className='Col'>{ query ? query : 'N/A' }</span>
      <span className='Col'>{ status ? status : 'N/A' }</span>
      <span className='Col'>{ userId ? userId : 'N/A' }</span>
      <span className='Col'>{ startTime ? startTime : 'N/A' }</span>
      <span className='Col'>{ endTime ? endTime : 'N/A' }</span>
      <span className='Col'>{ occurance ? occurance : 'N/A' }</span>
    </div>
    )
}


export default Row;