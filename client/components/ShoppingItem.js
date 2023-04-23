import React from 'react';
import "../style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ShoppingItem = (props) => {

  function handleRemove() {

  }

    return (
       <TransitionGroup className="Item">
           <li className="Todo-task">{props.content}</li>
           <div className='Todo-buttons'>
             <button onClick={handleRemove}>
               <i class='fas fa-trash' />
             </button>
            </div>
       </TransitionGroup>
    )
}

export default ShoppingItem;