import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import {TodoList}  from './components/TodoList/TodoList';
import SearchTask from './components/SearchTask/SearchTask';
import { TodoListStatus } from './components/TodoListStatus/TodoListStatus';
import AddTask from './components/AddTask/AddTask';

import './App.css';

class App extends Component {
  maxId = 100;
  state = { 
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Run to work'), ],
      term: ''
}

createTodoItem(text) {
  return {
    label: text,
    id: ++this.maxId,
    done: false,
    important: false
  }
}

  deleteTask = (id) => {
    this.setState(({state}) => {
      const idx = state.todoData.findIndex((el) => el.id === id);  // записываем в переменную id массива, равный id клика
      const newIdx = [ ...state.todoData.slice(0, idx), ...state.todoData.slice(idx + 1) ]; // в первом параметре копируем элементы с 0 по кликнутый элемент
                                                                                            // второй параметр копирует предыдущий массив с места удаленного id + 1 элемент
      return {
        todoData: newIdx
        // todoData: state.todoData.filter(item => item.id != id)
      }
    })
  }

  addTask = (text) => {
    const arr = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newTodoData = [ ...todoData, arr ];

      return {
        todoData: newTodoData
      }
    })
  }

  onToggleDone = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex((el) => el.id === id);  // записываем в переменную id массива, равный id клика
      const oldItem = state.todoData[idx];
      const newTodoData = {...oldItem, done: !oldItem.done };
      const newItem = [ ...state.todoData.slice(0, idx), newTodoData, ...state.todoData.slice(idx + 1) ];
    
      return {
        todoData: newItem
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex((el) => el.id === id);  // записываем в переменную id массива, равный id клика
      const oldItem = state.todoData[idx];
      const newTodoData = {...oldItem, important: !oldItem.important };
      const newItem = [ ...state.todoData.slice(0, idx), newTodoData, ...state.todoData.slice(idx + 1) ];
    
      return {
        todoData: newItem
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  searchTask(arr, term) {
    if(term.length === 0) return arr;
    
    return arr.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  render() {
    const { todoData, term } = this.state;
    const visibleItems = this.searchTask(todoData, term);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    const list = todoData.length ? TodoList : 'Задач нет';

    return(
      <div className="app-container container">

          <AppHeader 
            todo={todoCount}
            done={doneCount}
          />

        <div className="d-flex justify-content-between search-wrapper">
          <SearchTask onSearchChange={this.onSearchChange} />
          <TodoListStatus />
        </div>

        { list }

        <TodoList 
           todoData={visibleItems}
           deleteTask={ this.deleteTask }
           onToggleDone={this.onToggleDone}
           onToggleImportant={this.onToggleImportant} 
           />

           <AddTask 
             addTask={this.addTask}
           />

      </div>
    )
  }
}

export default App;