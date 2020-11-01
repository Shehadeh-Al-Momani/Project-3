import React from 'react';
import "../../src/App.css";

const TodoItem = (props) => {
    const deleteItem = () => {
        props.delete(props.id)
    }
    const { oneTask, num } = props;
    const { product, price } = oneTask;
    const title_ = product.charAt(0).toUpperCase() + product.slice(1);
    return (
        <div className="todo-list">
            {num}. {title_}{' : '} {price}{" $ "}
            <button class="delete" onClick={deleteItem}> X </button>
        </div>
    );
}


export default TodoItem