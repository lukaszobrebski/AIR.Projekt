import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CreateTask from './containers/CreateTask';
import Login from './containers/Login';
import Register from './containers/Register';
import ViewTask from './containers/ViewTask';
import './style/base.scss'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      testVar:'dupa'
    }

    this.handler = this.handler.bind(this)
  }

  handler(user){
    this.setState(
      {testVar: user}
    )
  }

  render() {
    return (
      <Router>
        <div className='base'>
          <Route exact path='/' render={props => <Login testVar={this.state.testVar} handler={this.handler} />}/>
          <Route path="/register" component={Register}/>
          <Route path="/create" component={CreateTask}/>
          <Route path="/view" render={props => <ViewTask testVar={this.state.testVar}/>}/>
        </div>
      </Router>
    );
  }
}

