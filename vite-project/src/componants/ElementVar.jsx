import React from 'react'

export default function ElementVar() {
    const dis=false;
    let message;
    if(dis){
        message=<div><h1>hellow</h1></div>
    }else{
        message=<div><h1>world</h1></div>
    }
    
  return (
    message
  )
}
