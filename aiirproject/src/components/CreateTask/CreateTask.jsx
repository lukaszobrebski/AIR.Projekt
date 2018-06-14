import React from 'react'
import './CreateTask.scss';
import SendFile from '../SendFile';

const CreateTask = props => {

  const closeContainer = (event) => {
    event.preventDefault();
    return props.close();
  }

  const state = {
    userID:'',
    taskName:'',
    query:''
  }
  
  return (
    <div className='overlay'>
      <div className='CreateTask'>
        <div className='CreateTask__Header'>
          <h1>Create Task</h1>
          <button onClick={(event) => closeContainer(event)}>X</button>
        </div>
        <div className='CreateTask__Main'>
        <form className='CreateTask__Form' onSubmit={props.onSubmit}>
          <label for='taskName'>Task Name</label>
          <input type='text' name='taskName' onChange={props.onChangeTaskName} value={props.taskName} />
          <label for='query'>Query</label>
          <input type='text' name='query' onChange={props.onChangeQuery} value={props.query} />
          <SendFile/>
          <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTask;