import React, { useState } from 'react';

const NewItem = (props) => {
  const [textInput, setTextInput] = useState("");
  const arrObject = ["id", "version", "product", "price", "category", "department"];

  const [id, setId] = useState(Math.floor(Math.random() * 100));
  const [version, setVersion] = useState(Math.floor(Math.random() * 2500));
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(Math.floor(Math.random() * 3000));
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");

  const handleInputChange = async (e, k) => {
    console.log('k :', k)
    if (k === 'id') { setId(Number(e.target.value)) }
    if (k === 'version') { setVersion(Number(e.target.value)) }
    if (k === 'product') { setProduct(e.target.value) }
    if (k === 'price') { setPrice(Number(e.target.value)) }
    if (k === 'category') { setCategory(e.target.value) }
    if (k === 'department') { setDepartment(e.target.value) }
  }

  const addNewItem = () => {
    props.add({ id, version, product, price, category, department })
    setTextInput("")
  }

  return (
    <div className="new-item">
      { arrObject.map((elem, i) => {
        return <div class="input">
          {elem} :
          <input
            type="text"
            placeholder= {`write new item` + " " + elem }
            onChange={e => handleInputChange(e, elem)}
          />
        </div>
      })}      
      <button class="button" onClick={addNewItem} >Add</button>
    </div>
  );
}

export default NewItem

