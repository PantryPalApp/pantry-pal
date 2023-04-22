import React, { useState, useEffect } from 'react';
import IngredientsList from './IngredientsList';
import "../style.css";

const RecipeCard = ({image, cuisineType, label, ingredients, calories, instructions}) => {
    const [showInd, setShowInd] = useState(false);
    // const clickEvent = (event) => {
    //   console.log('event.target', event.target);
    //   console.log(document.getElementById(event.target.id).checked);
    //   console.log(ingredients[parseInt(event.target.name)])
    //   // if(document.getElementById(event.target.id).checked){
    //   //   //post request to shopping list for text and label
    
    //   // } else {
    //   //   //delete request to shopping list
    //   // }
    // }
    return(
    <div>
      <article className="card">
        <div className="box"><img src={image} /></div>
        <header className="card-content">          
          <a href={instructions} target="_blank"><span className="card-header">{label}</span></a>
          {ingredients && <button className="showIngredients" onClick={() => setShowInd(!showInd)}>show ingredients</button>}
          {showInd ? 
          <IngredientsList ingredients={ingredients} label={label} /> : 
          (<ul style={{display: 'none'}} />)}
        </header>
        <footer className="card-content footer">
          <div className="card-category">{cuisineType}</div>
          <div className="card-calories">Calories: {Math.floor(calories)}</div>
        </footer>
      </article>
    </div>
  )
}

export default RecipeCard;