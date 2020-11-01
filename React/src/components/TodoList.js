import React, { Component } from 'react';
import "../../src/App.css";
import TodoItem from './TodoItem';

export default function TodoList(props) {
  console.log('props :', props)
  const todoTasks = props.tasksArr.map((e, i) => (
    < TodoItem oneTask={e} num={i + 1} id={i} delete={props.delete} />
  ));
  return (
    <div className="todo-list">
      {todoTasks}
    </div>
  );
}


