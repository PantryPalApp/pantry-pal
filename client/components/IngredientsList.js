import React, { useState, useEffect } from 'react';
import "../style.css";

const IngredientsList = ({ label, ingredients, userID, recipeID }) => {

    const clickEvent = async (event) => {
      console.log('event.target', event.target);
      console.log(document.getElementById(event.target.id).checked);
      console.log(parseInt(event.target.name))
      if(document.getElementById(event.target.id).checked){
        //post request to shopping list for text and label
        try {
          console.log('Trying to post to ', `/api/${userID}/shopping-list`)
          const response = await fetch(`/api/${userID}/shopping-list`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ingredient_id: parseInt(event.target.name)}),
          })
        } catch (error){
          console.log('Err in posting shopping item, err: ', error)
        }
        
      } else {
        try{
        //delete request to shopping list
        const response = await fetch(`/api/${userID}/shopping-list`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ingredient_id: parseInt(event.target.name)}),          
        })
        }catch(error){
          console.log('Error in deleting the item from the shopping list', error)
        } 
      }
    } //clickevent close
    
    if(ingredients === undefined ) return;
    return(
        <div className="card-ingredients">
        {ingredients.map((ingredient,i)=>(
          <div key={i}>
            <input id={ingredient.id} name={ingredient.id} onClick={clickEvent} type="checkbox"/>{ingredient.text}
          </div>))}
        </div>
    )

}




export default IngredientsList;