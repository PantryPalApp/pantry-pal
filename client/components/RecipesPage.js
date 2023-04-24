import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';
import "../style.css";
//app id 0fc911a9
//app key 2db3f0fd802520d8b7589405b0fd69ab

const RecipesPage = ({userID}) => {
  const [showInd, setShowInd] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    try {
      const response = await fetch(`/api/${userID}/recipes`)
      const data = await response.json();
      //console.log(data);
      setRecipes(data);
      
    } catch(error) {
      console.log(`Err to get recipes: ${error}`);
    }
  }

  useEffect(() => {getRecipes()},[]);
  

  const ingredients = showInd ? (<ul className="card-ingredients">{recipe.ingredientLines}</ul>) : (<ul style={{display: 'none'}} />)

  return(
    <div className='recipes-page'>
      <Navbar/>
      <div className="show-recipes">
        {recipes.map((recipe, i) => <RecipeCard key={i} {...recipe} userID={userID}/>)}
      </div>

    </div>
  )
}

export default RecipesPage;