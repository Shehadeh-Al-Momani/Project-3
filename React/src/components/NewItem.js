import React, { useState } from 'react';

const NewItem = (props) => {
  const [textInput, setTextInput] = useState("");

  // const [oneProduct, setProduct] = useState({
  //   id: null,
  //   version: null,
  //   product: (""),
  //   price: null,
  //   category: (""),
  //   department: (""),
  // });


  // const arrKeys = Object.keys(oneProduct);
  // const arrObject = Object.entries(oneProduct);

  const [id, setId] = useState(Math.floor(Math.random() * 100));
  const [version, setVersion] = useState(Math.floor(Math.random() * 2500));
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(Math.floor(Math.random() * 3000));
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");

  const handleInputChange = async (e, k) => {
    console.log('key :', k)

    if (k === 'id') { setId(Number(e.target.value)) }
    if (k === 'version') { setVersion(Number(e.target.value)) }
    if (k === 'product') { setProduct(e.target.value) }
    if (k === 'price') { setPrice(Number(e.target.value)) }
    if (k === 'category') { setCategory(e.target.value) }
    if (k === 'department') { setDepartment(e.target.value) }
    // if (k === "version") console.log('e.target.version :', e.target.value)
    // if (k === "product") console.log('e.target.product :', e.target.value)
    // if (k === "price") console.log('e.target.price :', e.target.value)
    // if (k === "category") console.log('e.target.category :', e.target.value)
    // if (k === "Department") console.log('e.target.Department :', e.target.value)

    // setProduct({
    //   id: e.target.value,
    //   version: e.target.value,
    //   product: e.target.value,
    //   price: e.target.value,
    //   category: e.target.value,
    //   department: e.target.value,
    // });

  }
  const addNewItem = () => {
    props.add({
      id,
      version,
      product,
      price,
      category,
      department
    })
    setTextInput("")
  }

  return (
    <div className="new-item">

      id :
      <input
        type="text"
        placeholder="write new item id"
        onChange={e => handleInputChange(e, 'id')}
      />
      version :
      <input
        type="text"
        placeholder="write new item version"
        onChange={e => handleInputChange(e, "version")}
      />
      product :
      <input
        type="text"
        placeholder="write new item product"
        onChange={e => handleInputChange(e, "product")}
      />
      price :
      <input
        type="text"
        placeholder="write new item price"
        onChange={e => handleInputChange(e, "price")}
      />
      category :
      <input
        type="text"
        placeholder="write new item category"
        onChange={e => handleInputChange(e, "category")}
      />
      department :
      <input
        type="text"
        placeholder="write new item department"
        onChange={e => handleInputChange(e, "department")}
      />
      <button class="button" onClick={addNewItem} >Add</button>
    </div>
  );

}

export default NewItem

