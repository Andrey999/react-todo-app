import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    value: ''
  }

  onLabelChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  onLabelSubmit = (event) => {
    event.preventDefault();
    if(!this.state.value) return false;
    this.props.addTask(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    const { value } = this.state;
    return(
      <form className="todo-add-task" onSubmit={this.onLabelSubmit} >
        <input type="text" className="form-control todo-add-task-input" placeholder="Add task" value={value} onChange={this.onLabelChange} />
        <button className="btn btn-primary">Add Task</button>
      </form>
   )
  }
}
export default AddTask;