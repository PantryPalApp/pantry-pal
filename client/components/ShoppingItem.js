import React from 'react';
import "../style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ShoppingItem = (props) => {

  const handleRemove = async() => {
    // Delete this item when button is pressed
    try{
      const response = await fetch(`/api/${props.userID}/shopping-list`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ingredient_id: props.ingredient_id})
        })
      props.getShoppingItems()
    } catch (error){
      console.log('Error deleting the shopping list item', error);
    }
  };
  
    return (
       <TransitionGroup className="Item">
           <li className="Todo-task">{props.content}</li>
           <div className='Todo-buttons'>
             <button onClick={handleRemove}>
               <i className='fas fa-trash' />
             </button>
            </div>
       </TransitionGroup>
    )
}

export default ShoppingItem;