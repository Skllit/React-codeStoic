import React, { useState } from 'react'

function Forms() {
    const [name ,setName]=useState("")

    function handleChange(e){
        setName(e.target.name)

    }

  return (
    <div>
        <form>
            {/* (e)=>e.target.name} */}
            <input type='text' onChange={handleChange}>
            
            </input>
        </form>
      
    </div>
  )
}

export default Forms
