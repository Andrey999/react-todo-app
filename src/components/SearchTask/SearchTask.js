import React, { Component } from 'react';

import './SearchTask.css';

class SearchTask extends Component {
  state = {
    term: ''
  }

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return(
      <input
         type="text"
         className="form-control todo-search-task" 
         placeholder="Search task" 
         value={this.state.term} 
         onChange={this.onSearchChange} 
      />
     )
  }
}
export default SearchTask;