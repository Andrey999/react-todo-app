import React, { Component } from 'react';
import {AppHeader} from './components/AppHeader/AppHeader';
import {TodoList}  from './components/TodoList/TodoList';
import SearchTask from './components/SearchTask/SearchTask';
import {TodoListStatus} from './components/TodoListStatus/TodoListStatus';
import AddTask from './components/AddTask/AddTask';

import './App.css';

class App extends Component {
  maxId = 100;
  state = { 
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Run to work'), ],
      term: '',
      value: 'all'
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

  filterButton(arr, value) {
    switch(value) {
      case 'all': return arr;
      case 'active': return arr.filter(item => !item.done);
      case 'done': return arr.filter(item => item.done);
      default: return arr;
    }
  }

  filterActiveButton = (value) => {
    this.setState({ value })
  }

  render() {
    const { todoData, term, value } = this.state;
    const visibleItems = this.filterButton(
                         this.searchTask(todoData, term), value);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return(
      <div className="app-container container">
          <AppHeader 
            todo={todoCount}
            done={doneCount}
          />

        <div className="d-flex justify-content-between search-wrapper">
          <SearchTask onSearchChange={this.onSearchChange} />
          <TodoListStatus 
            value={value}
            filterActiveButton={this.filterActiveButton}
          />
        </div>

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