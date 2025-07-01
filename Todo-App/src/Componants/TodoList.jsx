import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({todos,setTodos }) {
  const sorted=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div>
        {sorted.map(item=>(
            <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}></TodoItem>       
            )
        ) }
        
    </div>
  )
}
