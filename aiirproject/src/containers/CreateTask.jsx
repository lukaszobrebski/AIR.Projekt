import React, { Component } from 'react';
import '../style/base.scss';
import { Link, Redirect } from 'react-router-dom';
import SendFile from '../components/SendFile';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      userID:'',
      taskName:'',
      query:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(event){
    alert('Submitted Values:' + this.state.taskName + ' ' + this.state.query);
    event.preventDefault();
  }
  refreshPage(){
    window.location.reload();
  }

  render() {
    return(
      <div className='container'>
        <div className='container container__login'>
          <h1>CreateTask</h1>
          <form className='container container__login--form' onSubmit={this.handleSubmit}>
              {/*<SendFile />*/}
              <label for='taskname'>Taskname</label>
              <input id='taskname' type='text' value={this.taskName} onChange={(event) => this.setState({taskName: event.target.value})}/>
              <label for='query'>Query</label>
              <input id='query' type='text' value={this.query} onChange={(event) => this.setState({query: event.target.value})}/>
              {/*<button className='btn btn-primary' type='submit'>Submit</button>*/}
              <SendFile userID={this.state.userID} keyword={this.state.query} taskname={this.state.taskName}/>
            </form>
          <button type="button" onClick={this.refreshPage}>Create another task</button>
          <Link to='/register'>Register</Link>
          <Link to='/'>Login</Link>
          <Link to='/view'>View</Link>
        </div>
      </div>
    )
  }
}