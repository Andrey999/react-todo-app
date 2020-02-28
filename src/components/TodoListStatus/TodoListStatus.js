import React, { Component } from 'react';

export const TodoListStatus = ({ value, filterActiveButton }) => {
 const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

    const btn = buttons.map(({ name, label }) => {
    const isActiveBtn = value === name ? 'btn-primary' : 'btn-outline-secondary' 

      return <button type="button"
        className={`btn ${isActiveBtn}`}
        key={name}
        onClick={() => filterActiveButton(name)}
        >{ label }</button>
    });
    return(
      <div className="btn-group">
      { btn }
      </div>
    );
}