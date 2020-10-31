import React, { Component } from 'react';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
    };
  }
  handleInputChange = (e, next) => {
    this.setState({ textInput: e.target.value })
  };

  addNewItem = () => {
    this.props.add(this.state.textInput)
    this.setState({ textInput: "" })
  }
  render() {
    return (
      <div className="new-item">
        <input
          id="add"
          type="text"
          placeholder="write new task title" 
          onChange={this.handleInputChange}
          value={this.state.textInput}
        />
        <button onClick={this.addNewItem}>Add</button>
      </div>
    );
  }
}


