import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';
import "../style.css";
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

  /*
   "ingredientLines": [
          "2 1/2 quarts water",
          "3 cups kosher salt",
          "One dozen (12) duck eggs"
        ],
  "ingredients": [
          {
            "text": "2 1/2 quarts water",
            "quantity": 2.5,
            "measure": "quart",
            "food": "water",
            "weight": 2365.882365,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cups kosher salt",
            "quantity": 3,
            "measure": "cup",
            "food": "kosher salt",
            "weight": 699,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
*/
const RecipesPage = () => {
  const [recipe, setRecipe] = useState({});
  const [showInd, setShowInd] = useState(false);

  const getRecipes = () => {
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0fc911a9&app_key=2db3f0fd802520d8b7589405b0fd69ab')
      .then((res) => res.json())
      .then((data) => {console.log(data.hits[0].recipe);setRecipe(data.hits[0].recipe)})
      .catch(err => console.log(err));
  }
  
  useEffect(() => getRecipes(),[]);

  const ingredients = showInd ? (<ul className="card-ingredients">{recipe.ingredientLines}</ul>) : (<ul style={{display: 'none'}} />)

  return(
    <div className='recipes-page'>
      Recipes
      <Navbar/>
      <div>
        <RecipeCard {...recipe} instructions={recipe.url} ingredients={recipe.ingredientLines}/>
        {/* <article className="card">
			    <div className="box"><img src={recipe.image} /></div>
			      <header className="card-content">
              <span className="card-category">{recipe.cuisineType}</span>
              <span className="card-header">{recipe.label}</span>
              <button className="showIngredients" onClick={() => setShowInd(!showInd)}>show ingredients</button>
              {ingredients}
            </header>
          <footer className="card-content">
            <span className="card-calories">Calories: {Math.floor(recipe.calories)}</span>
            <span className="card-dietLabel">{recipe.dietLabels}</span>
          </footer>
      </article> */}
      </div>

    </div>
  )
}

export default RecipesPage;