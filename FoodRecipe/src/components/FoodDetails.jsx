import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

function FoodDetails({foodId}) {
  const [food,setFood]=useState({})
  const [isLoading,setIsLoading]=useState(true)

  const URl=`https://api.spoonacular.com/recipes/${foodId}/information`
  const Key="f33577f15a634c34a96c22e928447418"
  useEffect(()=>{
    const FetchFood=async()=>{
      const res= await fetch(`${URl}?apiKey=${Key}`)
      const data= await res.json();
      setFood(data)
      setIsLoading(false)

    }
    FetchFood()
  },[foodId])

 
  console.log(food);
          

  return (
    <div>
        <h2>Food Details</h2>
        <div>
          {foodId}
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />

        <span>{food.vegetarian?"VEG":"NON_VEG"}</span>
        <br></br>
        <span> NO of Serving :{food.servings}</span>
        </div>
         <div>
       
        <h3>Instructions</h3>
        {
          isLoading?(<p>Loading.....</p>):(<ol>
               
               
               <ItemList food={food} isLoading={isLoading}></ItemList>
          {/* <div>
            <h1>Ingredients</h1>
            {food.extendedIngredients.map((item=><div>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt={item.name}></img>
            <h3>{item.name} : {item.amount} {item.unit}</h3>
            
            </div>))}
          </div> */}

            {food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>
                <strong>Step {step.number}:</strong> {step.step}
              </li>
            ))}
          </ol>)
        }


      </div>
        </div>
      
  )
}

export default FoodDetails
