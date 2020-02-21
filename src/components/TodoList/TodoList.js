import React from 'react';
import TodoListItem  from '../TodoListItem/TodoListItem';

import './TodoList.css';

export const TodoList = ({ todoData, deleteTask }) => {
    const liElements = todoData.map((todo) => {
      return(
        <li className="todo-list list-group-item" key={todo.id} >
          <TodoListItem 
          deleteTask={() => deleteTask(todo.id)}
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