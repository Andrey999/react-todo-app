import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

import './TodoListItem.css';

class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })    
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  }

  render() {
    const { label, deleteTask } = this.props;
    const { done, important } = this.state;
    let lableItem = done ? 'todo-list-item todo-list-decoration' : 'todo-list-item';
    let marktItem = important ? 'todo-list-bold' : '';

    return(   
      <span className={lableItem}>
        <span className={marktItem} onClick={ this.onLabelClick }>{label}</span>

        <span>
          <button className="btn btn-outline-danger" onClick={deleteTask}><FontAwesomeIcon icon={faTrashAlt } /></button>
          <button className="btn btn-outline-success btn-success-icon" onClick={ this.onMarkImportant }><FontAwesomeIcon icon={faExclamation } /></button>
        </span>
        
      </span>
     
    )
  }
}
export default TodoListItem;