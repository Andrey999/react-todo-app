import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

import './TodoListItem.css';

class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState({
      important: true
    })      
  }

  todoDone = () => {
    this.setState({
      done: true
    })      
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    const onLabel = {
      fontWeight: important ? 'bold' : 'normal',
      color: important ? 'blue' : 'black'
    }
    const onButton = {
      textDecoration: done ? 'line-through' : 'none'
    }

    return(   
      <span className="todo-list-item">
        <span style={onLabel, onButton} 
              onClick={ this.onLabelClick }>{label}</span>

        <span>
        <button className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrashAlt } /></button>
        <button className="btn btn-outline-success btn-success-icon" onClick={ this.todoDone }><FontAwesomeIcon icon={faExclamation } /></button>
        </span>
        
      </span>
     
    )
  }
}
export default TodoListItem;