import React, { Component } from 'react';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      id : null ,
      version : null ,
      product : "",
      price : null,
      category : "",
      department :"" 
    };
  }
  handleInputChange = (e, next) => {
    this.setState({
       id: e.target.value , 
       version: e.target.value , 
       product: e.target.value , 
       price: e.target.value , 
       category: e.target.value , 
       department: e.target.value , 
       })
  };

  addNewItem = () => {
    this.props.add(this.state.textInput)
    this.setState({ textInput: "" })
  }
  render() {
    return (
      <div className="new-item">
        <input
          type="text"
          placeholder="write new item id"
          onChange={this.handleInputChange}
          value={this.state.id}
        />
        <input
          type="text"
          placeholder="write new item version"
          onChange={this.handleInputChange}
          value={this.state.version}
        />
        <input
          type="text"
          placeholder="write new item product"
          onChange={this.handleInputChange}
          value={this.state.product}
        />
        <input
          type="text"
          placeholder="write new item price"
          onChange={this.handleInputChange}
          value={this.state.price}
        />
        <input
          type="text"
          placeholder="write new item category"
          onChange={this.handleInputChange}
          value={this.state.category}
        />
        <input
          type="text"
          placeholder="write new item department"
          onChange={this.handleInputChange}
          value={this.state.department}
        />
        <button onClick={this.addNewItem}>Add</button>
      </div>
    );
  }
}


