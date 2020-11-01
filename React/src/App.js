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

  // const [key,setKey] = setState();

  getAllProducts = () => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        console.log('response.data :', response.data)
        this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  getMainElectronics = () => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        console.log('response.data.department :', response.data)
        this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  deleteFirst = () => {
    const newArray = [...this.state.tasks]
    newArray.shift()
    this.setState({ tasks: newArray })
  }

  creatNewItem = (newTitle) => {
    const newArray = [...this.state.tasks]
    const newTask = { title: newTitle, isCompleted: false }
    newArray.push(newTask)
    this.setState({ tasks: newArray })
  }

  // deleteNewItem = (i) => {
  //   const newArray = [...this.state.tasks]
  //   newArray.splice(i, 1)
  //   this.setState({ tasks: newArray })
  // }

  deleteNewItem = (i) => {
    const newArray = [...this.state.tasks]
    axios
      .delete('http://localhost:5000/Electronics/1')
      .then((response) => {
        newArray.splice(i, 1)
        this.setState({ tasks: newArray })
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  render() {
    return (
      <Router>
        <>
          <div className="app">
            <button class="button" onClick={this.getMainElectronics}>Departments</button>
            <button class="button" onClick={this.deleteFirst}>delete first item</button>
            {/* <button onClick={this.changeToCoding}>change 1st to 'coding'</button> */}

            <Route path="/Electronics">
              <div className="Electronics">
                <h1>Electronics</h1>
                <button class="button" onClick={this.getAllProducts}>All Products</button>
                <NewItem add={this.creatNewItem} />
                <TodoList tasksArr={this.state.tasks} delete={this.deleteNewItem} />
              </div>
            </Route>

          </div>
        </>
      </Router>
    )
  }
}

