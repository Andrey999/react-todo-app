import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

import './TodoList.css';

class TodoList extends Component {

  onLabelHandler = () => {
    const el = this.props.todoData;
    console.log(el.label);
  }

  render() {
    const { todoData } = this.props;

    return(
      <ul className="list-group">
        { todoData.map((todo) => (
          <li key={todo.id} 
             className="todo-list list-group-item" 
             style={{ color: todo.important ? 'tomato' : 'black'}}
             onClick={ this.onLabelHandler } >
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