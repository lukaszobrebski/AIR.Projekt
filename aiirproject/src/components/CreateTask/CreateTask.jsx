import React from 'react'
import './CreateTask.scss';
const CreateTask = props => {

  const closeContainer = (event) => {
    event.preventDefault();
    return props.close();
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
          <label for='taskName'>Query</label>
          <input type='text' name='query' onChange={props.onChangeQuery} value={props.query} />
          <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTask;