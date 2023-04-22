import React, { useState, useEffect } from 'react';
import "../style.css";

const IngredientsList = ({ingredients, label}) => {

  const clickEvent = (event) => {
    console.log('event.target', event.target);
    console.log(document.getElementById(event.target.id).checked);
    console.log(ingredients[parseInt(event.target.name)])
    // if(document.getElementById(event.target.id).checked){
    //   //post request to shopping list for text and label
  
    // } else {
    //   //delete request to shopping list
    // }
  }

    return(
    <div className="card-ingredients">
      {ingredients.map((x,i)=>(
      <div key={i}>
        <input id={x} name={i} onClick={clickEvent} type="checkbox"/>{x}
      </div>))}
    </div>
    )
}


export default IngredientsList;