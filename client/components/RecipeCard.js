import React, { useState, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import "../style.css";

const RecipeCard = ({id, image, cuisine, label, ingredients, calories, instructions, userID, showButton}) => {
    // false if not showing ingredients, true if expanded
    const [showInd, setShowInd] = useState(false);
    if(showButton === undefined) showButton = true;
    return(
    <div>
      <article className="card">
        <div className="box"><img src={image} /></div>
        <header className="card-content">          
          <a href={instructions} target="_blank"><span className="card-header">{label}</span></a>
          {showButton && <button className="showIngredients" onClick={() => setShowInd(!showInd)}>{ showInd ? 'Hide Ingredients' : 'Show Ingredients'}</button>}
          {showInd ? 
          <IngredientsList ingredients={ingredients} userID={userID} recipeID={id} /> : 
          (<ul style={{display: 'none'}} />)}
        </header>
        <footer className="card-content footer">
          <div className="card-category">{cuisine}</div>
          <div className="card-calories">Calories: {Math.floor(calories)}</div>
        </footer>
      </article>
    </div>
  )
}

export default RecipeCard;