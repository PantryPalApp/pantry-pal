import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
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
    <div>
      Recipes
      <Navbar/>
      <div>
        <article className="card">
			    <div className="box"><img src={recipe.image} /></div>
			      <header className="card-content">
              <span className="card-category">{recipe.cuisineType}</span>
              <span className="card-header">{recipe.label}</span>
              <button className="showIngredients" onClick={() => setShowInd(!showInd)}>show ingredients</button>
              {ingredients}
            </header>
          <footer className="card-content">
            <span className="card-calories">Calories: {Math.floor(recipe.calories)}</span>
            <span className="card-dietlabel">{recipe.dietLabels}</span>
          </footer>
      </article>
      </div>

    </div>
  )
}

export default RecipesPage;