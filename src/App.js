import React from 'react';
import { AppHeader } from './components/AppHeader';
import { TodoList } from './components/TodoList';
import { SearchTask } from './components/SearchTask';


const App = () => {
  const todoData = [
    { id: 1, label: 'Drink coffee', important: false },
    { id: 2, label: 'Learn React', important: false },
    { id: 3, label: 'Run to work', important: false }
  ];

  return(
    <div>
      <AppHeader/>
      <SearchTask />
      <TodoList todoData={todoData} />
    </div>
  )
}

export default App;