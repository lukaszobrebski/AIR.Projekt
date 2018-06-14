import React, { Component } from 'react';
import LoginMenu from '../components/LoginMenu';
import Register from '../components/Register';
import Login from '../components/Login';
import apiClient from '../api/apiClient'
import '../style/base.scss';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register:false
    }
  }
  
  componentDidUpdate(prev) {
    console.log(this.state)
  }

  display = popup => {
    switch (popup) {
      case 'login': {
        const { login } = this.state;
        return this.setState({ login: !login })
      }
      case 'register': {
        const { register } = this.state;
        return this.setState({ register: !register })
      }
      default:
        break;
    }
  }
  validateUser(event){
    event.preventDefault();
    const data = new FormData(event.target);
    apiClient.login(data)
    .then(response => response === true ? null : null)
    .catch(error => {})
    
  }

  render() {
    const { login, register } = this.state;
    return(
      <div className='container'>
        { login ? <Login close={() => this.setState({ login: false, register: true })}/> : null }
        { register ? <Register close={() => this.setState({register: false, login: true })}/> : null }
        {/*<LoginMenu display={popup => this.display(popup)}/>*/}  
        {/*<BaseTable tasks={this.state.tasks}/>*/}
      </div>
    )
  }
}