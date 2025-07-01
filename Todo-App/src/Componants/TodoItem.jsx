import React from 'react'



function TodoItem({item ,todos,setTodos}) {

  function handleDelete(item){

    setTodos(todos.filter((p)=>p!==item))

  }

  function handleClick(item){
    
    const newarray=todos.map((p)=>p.name===item?{...p,done:!p.done}:p)
    setTodos(newarray)

    console.log(todos)
  }

  

  const style = item.done ? { textDecoration: "line-through" } : {};
  return (
    <div>
      <span style={style} onClick={()=>handleClick(item.name)}>
         {item.name}
      </span>
     
      <button onClick={()=>handleDelete(item)} >X</button>
    </div>
  )
}

export default TodoItem
