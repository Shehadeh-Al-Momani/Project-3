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
  handleInputChange = (e) => {
    this.setState({
      id: e.target.value1 ,
      version: e.target.value2 ,
      product: e.target.value3 ,
      price: e.target.value4 ,
      category: e.target.value5 ,
      department: e.target.value6 ,   
    }) 
  };

  addNewItem = () => {
    this.props.add({
     id : this.state.id ,
     version : this.state.version ,
     product : this.state.product ,
     price : this.state.price ,
     category : this.state.category ,
     department : this.state.department 
    })
    this.setState({ textInput: "" })
  }
  render() {
    return (
      <div className="new-item">
        <input
          type="text"
          placeholder="write new item id"
          onChange={this.handleInputChange}
          value1={this.state.id}
        />
        <input
          type="text"
          placeholder="write new item version"
          onChange={this.handleInputChange}
          value2={this.state.version}
        />
        <input
          type="text"
          placeholder="write new item product"
          onChange={this.handleInputChange}
          value3={this.state.product}
        />
        <input
          type="text"
          placeholder="write new item price"
          onChange={this.handleInputChange}
          value4={this.state.price}
        />
        <input
          type="text"
          placeholder="write new item category"
          onChange={this.handleInputChange}
          value5={this.state.category}
        />
        <input
          type="text"
          placeholder="write new item department"
          onChange={this.handleInputChange}
          value6={this.state.department}
        />
        <button class = "button" onClick={this.addNewItem}>Add</button>
      </div>
    );
  }
}


