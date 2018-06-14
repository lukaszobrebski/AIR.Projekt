import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import ViewTask from './containers/ViewTask';
import permissionDenied from './components/permissionDenied';
import './style/base.scss'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userID:'',
      isLogged: false,
    }

    this.handler = this.handler.bind(this)
  }

  handler(user,logged){
    alert("dupa!")
    this.setState({
      userID: user,
      isLogged: logged
    })
    

  }

  render() {
    return (
      <Router>
        <div className='base'>
          <Route exact path="/" render={props => <Home handler={this.state.handler}/>}/>
          {this.state.isLogged ? <Route exact path="/view" render={props => (<ViewTask/>)}/> : <Redirect to='/'/> }
        </div>
      </Router>
    );
  }
}

