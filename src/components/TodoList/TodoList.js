import React from 'react';
import { TodoListItem }  from '../TodoListItem/TodoListItem';

import './TodoList.css';

export const TodoList = ({ todoData, deleteTask, onToggleDone, onToggleImportant }) => {
    const liElements = todoData.map((todo) => {
      return(
        <li className="todo-list list-group-item" key={todo.id} >
          <TodoListItem 
          deleteTask={() => deleteTask(todo.id)}
          label={todo.label} 
          onToggleDone={() => onToggleDone(todo.id)}
          onToggleImportant={() => onToggleImportant(todo.id)}  
          done={todo.done}
          important={todo.important}
          />
        </li>
      );
    })

    return(
      <ul className="list-group">
       { liElements }
      </ul>
    )
  }