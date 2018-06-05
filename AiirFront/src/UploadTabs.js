import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TableExampleComplex from './historyTable';
import FileUpload from './FileUpload';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      username: this.props.username
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="View Task History" value="a">
          <div>
            <p>{}</p>
            <TableExampleComplex username={this.state.username}/>
          </div>
        </Tab>
        <Tab label="Create new File-based Task" value="b">
          <div>
            <br/>
            <FileUpload/>
            <br/>
          </div>
          </Tab>
          <Tab label="Tasks Status" value="c">
          <div>
              <p>/*TODO : Table of Tasks with their statuses (Done, Udegro, Waiting for start)
                How to ask server about status of particular task???
              */</p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}