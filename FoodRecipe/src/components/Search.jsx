import React, { useEffect, useState } from 'react'

function Search({foodData,setFoodData}) {
    const [query,setQuery]=useState("Pizza")
    const URL="https://api.spoonacular.com/recipes/complexSearch"
    const Key="f33577f15a634c34a96c22e928447418"

    useEffect(()=>{
        const fetchFood=async()=>{
            const res=await fetch(`${URL}?query=${query}&apiKey=${Key}`)
            const data= await res.json();
            console.log(data.results)
            setFoodData(data.results)

        }

        fetchFood()
    },[query])

  return (
    <div>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
      
    </div>
  )
}

export default Search
