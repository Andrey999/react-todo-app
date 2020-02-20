import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

import './TodoList.css';

class TodoList extends Component {
  render() {
    const { todoData } = this.props;

    return(
      <ul className="list-group">
        { todoData.map((todo) => (
          <li key={todo.id} 
             className="todo-list list-group-item" 
             style={{ color: todo.important ? 'tomato' : 'black'}} >
               { todo.label }  
            <div>
              <button className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrashAlt } /></button>
              <button className="btn btn-outline-success btn-success-icon"><FontAwesomeIcon icon={faExclamation } /></button>
            </div> 
               
          </li>
        ) )}
      </ul>
    )
  }
}

export default TodoList;