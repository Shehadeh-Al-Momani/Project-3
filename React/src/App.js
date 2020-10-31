import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import TodoList from "./components/TodoList";
import NewItem from './components/NewItem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  };

  completeFirst = () => {
    const newArray = [...this.state.tasks]
    newArray[0].isCompleted = true
    this.setState({ tasks: newArray })
  }

  deleteFirst = () => {
    const newArray = [...this.state.tasks]
    newArray.shift()
    this.setState({ tasks: newArray })
  }

  changeAge = () => {
    this.setState({ age: 80 })
  }

  changeToCoding = () => {
    const newArray = [...this.state.tasks]
    newArray[0].title = "Coding"
    this.setState({ tasks: newArray })
  }

  creatNewItem = (newTitle) => {
    const newArray = [...this.state.tasks]
    const newTask = { title: newTitle, isCompleted: false }
    newArray.push(newTask)
    this.setState({ tasks: newArray })
  }

  deleteNewItem = (i) => {
    const newArray = [...this.state.tasks]
    newArray.splice(i, 1)
    this.setState({ tasks: newArray })
  }

  render() {
    return (
      <Router>
      <>
        <div className="app">

          <Route path="/Electronics">
            <div className="Electronics">
              <h1>Electronics</h1>
              <button onClick={this.completeFirst}>All Products</button>
              <button onClick={this.completeFirst}>Departments</button>
              <NewItem add={this.createNewItem} />
              <TodoList tasksArr={this.state.tasks} a={this.state.age} />
            </div>
          </Route>

          <button onClick={this.completeFirst}>complete first item</button>
          <button onClick={this.deleteFirst}>delete first item</button>
          <button onClick={this.changeAge}>change age to 80</button>
          <button onClick={this.changeToCoding}>change 1st to 'coding'</button>
          <NewItem add={this.creatNewItem} />
          <TodoList tasksArr={this.state.tasks} delete={this.deleteNewItem} />
        </div>
      </>
      </Router>
    )
  }
}

