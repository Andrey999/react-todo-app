import React from 'react';

export const TodoList = (props) => {
  const { todoData } = props;

  return(
    <ul>
      { todoData.map((todo) => (
        <li key={todo.id}>{ todo.label }</li>
      ) )}
    </ul>
  )
}