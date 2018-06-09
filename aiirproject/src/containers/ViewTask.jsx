import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tasks:[]
     }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className='container'>
        <h1>ViewTask</h1>
        <table>
          <tbody>{this.state.Tasks.map((item, key) => {
              return(
                <tr key= {key}>
                  <td>{item.taskID}</td>
                  <td>{item.query}</td>
                  <td>{item.status}</td>
                  <td>{item.user_id}</td>
                  <td>{item.start_time}</td>
                  {item.status === "Finished" ?
                  (<td>{item.end_time}</td>) : null}
                  {item.status === "Finished" ?
                  (<td>{item.occurence_num}</td>) : null}
                </tr>
              )
          })}</tbody>
        
        
        </table>


          <Link to='/register'>Register</Link>
          <Link to='/create'>Create</Link>
          <Link to='/'>Logout</Link>
      </div>
    )
  }
}