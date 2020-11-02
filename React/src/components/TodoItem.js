import React from 'react';
import "../../src/App.css";

const TodoItem = (props) => {
    const { oneProduct, num } = props;
    const { product, price } = oneProduct;
    const deleteItem = () => {
        props.delete(props.id)
    }
    return (
        <div className="todo-list">
            {num}. {product}{' : '} {price}{" $ "}
            <button class="delete" onClick={deleteItem}> X </button>
        </div>
    );
}

export default TodoItem