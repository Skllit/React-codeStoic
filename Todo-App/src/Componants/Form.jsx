import React from 'react'

import { useState } from 'react';

function Form({todos,setTodos}) {

    const [todo,setTodo]=useState({name:"",done:false})

      function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false});
    }

  return (
    <div>
          <form  onSubmit={handleSubmit}>
            <input type="text" value={todo.name} onChange={(e)=>setTodo({name:e.target.value,done:false})} ></input>
            <button>Add</button>
        </form>
      
    </div>
  )
}

export default Form
