import React, { Component } from 'react';

class TodoListStatus extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];
 
  render() {
    const { value, filterActiveButton } = this.props;
    const btn = this.buttons.map(({ name, label }) => {
      const isActiveBtn = value === name ? 'btn-primary' : 'btn-outline-secondary' 

      return <button type="button"
        className={`btn ${isActiveBtn}`}
        key={name}
        onClick={() => filterActiveButton(name)}
        >{ label }</button>
    })
    return(
      <div className="btn-group">
      { btn }
      </div>
    );
  }
}
export default TodoListStatus;