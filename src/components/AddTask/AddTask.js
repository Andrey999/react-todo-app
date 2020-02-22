import React, { Component } from 'react';

import './AddTask.css';

class AddTask extends Component {

  state = {
    value: ''
  }

  render() {
    const { value } = this.state;
    const { addTask } = this.props;
    
    return(
      <div className="todo-add-task">
        <input type="text" className="form-control" placeholder="Search task" value={value} />
        <button className="btn btn-primary" onClick={() => addTask('Hello')}>Add Task</button>
      </div>
   )
  }
}

  export default AddTask;