import React from 'react';
import TodoListItem  from '../TodoListItem/TodoListItem';

import './TodoList.css';

export const TodoList = ({ todoData }) => {
    const liElements = todoData.map((todo) => {
      return(
        <li className="todo-list list-group-item">
          <TodoListItem key={todo.id} 
          label={todo.label} />
        </li>
      );
    })

    return(
      <ul className="list-group">
       { liElements }
      </ul>
    )
  }