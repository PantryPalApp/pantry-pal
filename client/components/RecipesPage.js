import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
//app id 0fc911a9
//app key 2db3f0fd802520d8b7589405b0fd69ab

//response.body.hits is an array
//res.body.hits[0] is the first object
// res.body.hits[0].recipe is an object
//"label": "Chicken Vesuvio", "image": url
  //"ingredients": [
  // {
  //   "text": "1/2 cup olive oil",
  //   "quantity": 0.5,
  //   "measure": "cup",
  //   "food": "olive oil",
  //   "weight": 108,
  //   "foodCategory": "Oils",
  //   "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
  //   "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
  // },
  // {
  //   "text": "5 cloves garlic, peeled",
  //   "quantity": 5,
  //   "measure": "clove",
  //   "food": "garlic",
  //   "weight": 15,
  //   "foodCategory": "vegetables",
  //   "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
  //   "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
  // },

const RecipesPage = () => {
  const [recipe, setRecipe] = useState({})
  

  const getRecipes = () => {
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0fc911a9&app_key=2db3f0fd802520d8b7589405b0fd69ab')
      .then((res) => res.json())
      .then((data) => setRecipe(data.hits[0].recipe));
  }
  
  useEffect(()=>getRecipes(),[]);

  return(
    <div>
      Recipes
      <Navbar/>
      <div>
        <p>{recipe.label}</p>
        <img src={recipe.image}/>
      </div>

    </div>
  )
}

export default RecipesPage;