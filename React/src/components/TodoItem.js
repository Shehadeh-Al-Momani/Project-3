import React, { Component } from 'react';
import "../../src/App.css";

export default function TodoItem(props) {
    const deleteItem = () => {
        props.delete(props.id)
    }
    const { oneTask, num } = props;
    const { product ,price} = oneTask;
    const title_ = product.charAt(0).toUpperCase() + product.slice(1);
    return (
        <div className="todo-list">
            {num}. {title_}{' : '} {price}{" $"}
            <button onClick={deleteItem}>X</button>
        </div>
    );
}


