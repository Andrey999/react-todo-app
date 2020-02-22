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
      const idx = state.todoData.findIndex((el) => el.id === id);  // записываем в переменную id массива, равный id клика
      const newIdx = [ ...state.todoData.slice(0, idx), ...state.todoData.slice(idx + 1) ]; // в первом параметре копируем элементы с 0 по кликнутый элемент
                                                                                            // второй параметр копирует предыдущий массив с места удаленного id + 1 элемент
      return {
        todoData: newIdx
        // todoData: state.todoData.filter(item => item.id != id)
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