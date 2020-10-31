import React, { Component } from 'react';
import "../../src/App.css";

export default function TodoItem(props) {
    const deleteItem = () => {
        props.delete(props.id)
    }
    const { oneTask, num, id } = props;
    const { title, isCompleted } = oneTask;
    const title_ = title.charAt(0).toUpperCase() + title.slice(1);
    return (
        <div className="todo-list">
            {num}. {title_}{' '} {isCompleted ? <input type="checkbox" checked /> : <input type="checkbox" />}
            <button onClick={deleteItem}>X</button>
        </div>
    );
}


