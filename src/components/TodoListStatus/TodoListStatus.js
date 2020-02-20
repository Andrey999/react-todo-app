import React from 'react';

export const TodoListStatus = () => {
  return(
    <div className="btn-group">
      <button type="button" className="btn btn-primary">All</button>
      <button type="button" className="btn btn-outline-danger">Active</button>
      <button type="button" className="btn btn-outline-info">Done</button>
    </div>
  );
}