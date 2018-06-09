import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../style/base.scss';

export default class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tasks:[{
        taskID:'1',
        query:'dupa',
        status:'Pending',
        start_time:'09.06.18',
        user_id:'ThomasP'
      },
      {
        taskID:'1',
        query:'dupa',
        status:'Pending',
        start_time:'09.06.18',
        user_id:'ThomasP'
      }]
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
                  <td>{item.taskID }</td>
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