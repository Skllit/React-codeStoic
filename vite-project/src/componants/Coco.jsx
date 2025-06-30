import React from 'react'
import Hellow from './Hellow';
import World from './World';
function Coco() {

const dis=false;
if(dis)
{
    return <Hellow></Hellow>;
}else{
    return <World></World>;
}
}

export default Coco
