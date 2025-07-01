import React, { useState } from 'react'

function Forms() {
    const [name ,setName]=useState({firstname:"",LastName:""})

    function handleChange(e){

        setName({...name,[e.target.name]:e.target.value})

    }

  return (
    <div>
        <form>
            {/* (e)=>e.target.name} */}
            <input type='text' onChange={handleChange} name="firstname" value={name.firstname}>
            
            </input>
            <input type='text' onChange={handleChange} name="Lastname" value={name.LastName}>
            
            </input>

        </form>
      
    </div>
  )
}

export default Forms
