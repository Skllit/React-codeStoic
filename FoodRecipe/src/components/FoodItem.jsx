import React from 'react'

function FoodItem({food, setFoodId}) {
  return (
    <div>
        <img src={food.image} alt={food.title}></img>
        <h1 key={food.id}>{food.title}</h1>
        <button onClick={()=>{
            console.log(food.id)
            setFoodId(food.id)
        }}>View Recipe</button>
      
    </div>
  )
}

export default FoodItem
