import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

import './TodoListItem.css';

class TodoListItem extends Component {

  render() {
    const { label, deleteTask, onToggleDone, onToggleImportant, done, important } = this.props;

    let lableItem = done ? 'todo-list-item todo-list-decoration' : 'todo-list-item';
    let marktItem = important ? 'todo-list-bold' : '';

    return(   
      <span className={lableItem}>
        <span className={marktItem} onClick={ onToggleDone }>{label}</span>

        <span>
          <button className="btn btn-outline-danger" onClick={deleteTask}><FontAwesomeIcon icon={faTrashAlt } /></button>
          <button className="btn btn-outline-success btn-success-icon" onClick={ onToggleImportant }><FontAwesomeIcon icon={faExclamation } /></button>
        </span>
        
      </span>
     
    )
  }
}
export default TodoListItem;