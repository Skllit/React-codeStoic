import React, { useState } from 'react'
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';

function Todo() {
      const [todos,setTodos]=useState([])
      const completed=todos.filter((p)=>p.done).length
      const total=todos.length
 
  return (
    <div>
        <Form todos={todos} setTodos={setTodos}></Form>
        <TodoList  todos={todos} setTodos={setTodos}></TodoList>
        <h1>Completed:{completed}</h1>
        <h1>Total-Todos:{total}</h1>
      
    </div>
  )
}

export default Todo
