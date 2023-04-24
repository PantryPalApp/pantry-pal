import React, {useState} from 'react';
import Navbar from './Navbar';
import ShoppingItem from './ShoppingItem';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ShoppingListPage = () => {
  const [items, setItems] = useState([{id: 1, content: 'One cup of water'}, {id: 2, content: 'Two cups of flour'}, {id: 3, content: 'Nothing here'}]);
  //get request to obtain user's shopping list from DB

  const itemArr = items.map(item => {
    return (
      <CSSTransition key={item.id} timeout={500} classNames='item'>
        <ShoppingItem key={item.id} content={item.content}/>
      </CSSTransition>
    )
  });

  return(
    <div>
      <Navbar/>
      <section className="landingPage2">
      </section>
      <div className="List">
        <ul>        
          <TransitionGroup>{itemArr}</TransitionGroup>
        </ul>
      </div>
    </div>
  )
}

export default ShoppingListPage