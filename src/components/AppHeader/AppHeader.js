import React from 'react';
import './AppHeader.css';

export const AppHeader = ({ todo, done }) => {
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