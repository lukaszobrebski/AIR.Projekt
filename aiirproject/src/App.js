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
  }

  render() {
    return (
      <Router>
        <div className='base'>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/create" component={CreateTask}/>
          <Route path="/view" component={ViewTask}/>
        </div>
      </Router>
    );
  }
}

