import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    const { todo, done } = this.props;
    return(
      <div className="d-flex justify-content-between align-items-baseline">
        <h1 className="text-center todo-title">Todo List</h1>
        <div className="active-counter">
        <span className="active-counter-count text-muted">{todo} more todo,</span>
        <span className="active-counter-count text-muted"> {done} done</span>
        </div>
      </div>
    )
  }
}

export default AppHeader;