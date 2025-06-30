import React from 'react'

const FirstComp = (props) => {

  return (
    <div>
        <h1>hellow {props.person.name} is  {props.person.age} years old</h1>
    </div>
  )
}

export default FirstComp
