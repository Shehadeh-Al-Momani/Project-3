import React, { useState, useEffect } from 'react';
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

const App = (props) => {

  const [products, setProducts] = useState([]);
  const [departments, setDepartments] = useState([]);

  const getAllProducts = () => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        console.log('response.data :', response.data)
        setProducts(response.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  const creatNewItem = (newItem) => {
    const newProduct = newItem
    console.log('newProduct :', newProduct)
    axios
      .post('http://localhost:5000/newProduct', newProduct)
      .then((response) => {
        const newArray = [...products]
        newArray.push(newProduct)
        setProducts(newArray);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  const updateProduct = (newPrice, id) => {
         axios
      .put(`http://localhost:5000/updateProduct/${id}`, {price : newPrice })
      .then((response) => {
          const newArray = [...products];
          setProducts(products);       
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  const deleteFirst = () => {
    const newArray = [...products]
    newArray.shift()
    setProducts(newArray);
  }

  // deleteNewItem = (i) => {
  //   const newArray = [...tasks]
  //   newArray.splice(i, 1)
  // setTasks(newArray);
  // }
  const deleteNewItem = (i,id) => {
    axios
      .delete(`http://localhost:5000/deleteProduct/${id}`,{ data: products[i] })
      .then((response) => {
        setProducts(products);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
  
  return (
    <Router>
      <>
        <div className="app">
          <button class="button" onClick={deleteFirst}>delete first item</button>
          {/* <button onClick={changeToCoding}>change 1st to 'coding'</button> */}

          <Route path="/Electronics">
            <div className="Electronics">
              <h1>Electronics</h1>
              <button class="button" onClick={getAllProducts}>All Products</button>
              {/* <button class="button" onClick={getMainElectronics}>Departments</button> */}

              <NewItem add={creatNewItem} />
              <TodoList productsArr={products} update={updateProduct} delete={deleteNewItem} />
            </div>
          </Route>

        </div>
      </>
    </Router>
  )
}

export default App