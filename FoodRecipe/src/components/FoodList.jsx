import React from 'react'
import FoodItem from './FoodItem'

function FoodList({foodData,setFoodId}) {
  return (
    <div>
        {foodData.map((food)=>
        <FoodItem setFoodId={setFoodId} food={food} key={food.id}></FoodItem>

      )}
      
    </div>
  )
}

export default FoodList
