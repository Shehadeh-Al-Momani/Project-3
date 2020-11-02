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

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => { getAllProducts() }, []);

  const getAllProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products')
      await setProducts(res.data);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  }

  const creatNewItem = async (newItem) => {
    try {
      const newProduct = newItem
      axios
        .post('http://localhost:5000/newProduct', newProduct)
      products.push(newProduct)
      await setProducts(products);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  };

  const updateProduct = async (newPrice, id) => {
    try {
      axios
        .put(`http://localhost:5000/updateProduct/${id}`, { price: newPrice })
      await setProducts(products);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
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
  const deleteNewItem = async (i, id) => {
    try {
      axios
        .delete(`http://localhost:5000/deleteProduct/${id}`, { data: products[i] })
      products.splice(i, 1)
      await setProducts(products);
    }
    catch (err) {
      console.log('ERR: ', err);
    };
  };

  return (
    <Router>
      <>
        <div className="app">
          <Route path="/">
            <div className="Electronics">
              <h1>Electronics</h1>
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