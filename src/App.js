import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import {TodoList}  from './components/TodoList/TodoList';
import { SearchTask } from './components/SearchTask/SearchTask';
import { TodoListStatus } from './components/TodoListStatus/TodoListStatus';

import './App.css';


class App extends Component {

  state = { 
    todoData: [
    { id: 1, label: 'Drink coffee' },
    { id: 2, label: 'Learn React' },
    { id: 3, label: 'Run to work' }
  ]
}

  deleteTask = (id) => {
    this.setState((state) => {
      return {
        todoData: state.todoData.filter(item => item.id != id)
      }
    })
  }

  render() {
    const { todoData } = this.state;
    const list = todoData.length ? TodoList : 'Задач нет';
    return(
      <div className="app-container container">
          <AppHeader todo={1} done={3} />
        <div className="d-flex search-wrapper">
          <SearchTask />
          <TodoListStatus />
        </div>
        { list }
        <TodoList 
           todoData={todoData}
           deleteTask={ this.deleteTask } />
      </div>
    )
  }
}

export default App;