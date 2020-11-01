import React, { Component } from 'react';
import "../../src/App.css";

export default function TodoItem(props) {
    const deleteItem = () => {
        props.delete(props.id)
    }
    const { oneTask, num, id } = props;
    const { department } = oneTask;
    const title_ = department.charAt(0).toUpperCase() + department.slice(1);
    return (
        <div className="todo-list">
            {num}. {title_}{' '} 
            <button onClick={deleteItem}>X</button>
        </div>
    );
}


