import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

{/*Temporary test Data*/}
const tableData = [
  {
    taskname: 'Task1',
    word: 'Employed',
    rowname: '12',
    column: '540'
  },
  {
    taskname: 'Task1',
    word: 'Employed',
    rowname: '123',
    column: '40'
  },
  {
    taskname: 'Task1',
    word: 'Employed',
    rowname: '123',
    column: '90'
  },
  {
    taskname: 'Task1',
    word: 'Employed',
    rowname: '340',
    column: '10'
  },
  {
    taskname: 'Task2',
    word: 'Employee',
    rowname: '120',
    column: '1000'
  },
  {
    taskname: 'Task2',
    word: 'Employee',
    rowname: '317',
    column: '540'
  },
  {
    taskname: 'Task3',
    word: 'Workforce',
    rowname: '34',
    column: '11'
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '350px',
    username: this.props.username
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Finished Tasks" style={{textAlign: 'center'}}>
                <h2>Finished tasks for {this.state.username}</h2>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Task Name">Task</TableHeaderColumn>
              <TableHeaderColumn tooltip="Seeked Word">Word</TableHeaderColumn>
              <TableHeaderColumn tooltip="Row">Row</TableHeaderColumn>
              <TableHeaderColumn tooltip="Column">Column</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.taskname}</TableRowColumn>
                <TableRowColumn>{row.word}</TableRowColumn>
                <TableRowColumn>{row.rowname}</TableRowColumn>
                <TableRowColumn>{row.column}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Task Name</TableRowColumn>
              <TableRowColumn>Seeked Word</TableRowColumn>
              <TableRowColumn>Row</TableRowColumn>
              <TableRowColumn>Column</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        
      </div>
    );
  }
}