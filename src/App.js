import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList  from './components/TodoList/TodoList';
import { SearchTask } from './components/SearchTask/SearchTask';
import { TodoListStatus } from './components/TodoListStatus/TodoListStatus';

import './App.css';


const App = () => {
  const todoData = [
    { id: 1, label: 'Drink coffee', important: true },
    { id: 2, label: 'Learn React', important: false },
    { id: 3, label: 'Run to work', important: false }
  ];

  return(
    <div className="app-container container">
        <AppHeader todo={1} done={3} />
      <div className="d-flex search-wrapper">
        <SearchTask />
        <TodoListStatus />
      </div>
      
      <TodoList todoData={todoData} />
    </div>
  )
}

export default App;