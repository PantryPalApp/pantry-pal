import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import ShoppingItem from './ShoppingItem';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../style.css";

const ShoppingListPage = ({userID}) => {
  const [items, setItems] = useState([]);
  
  //get request to obtain user's shopping list from DB
  const getShoppingItems = async () => {
    try {
      const response = await fetch(`/api/${userID}/shopping-list`)
      const data = await response.json();
      console.log(data);
      setItems(data);
      
    } catch(error) {
      console.log(`Err to get shopping items: ${error}`);
    }
  }

  useEffect(() => {getShoppingItems()}, []);

  const itemArr = items.map((item, i) => {
    return (
      <CSSTransition key={item.id} timeout={500} classNames='item'>
        {/* trying to have a unique key so if the same item was added twice, it shows up twice */}
        <ShoppingItem key={item.id + i*1000} ingredient_id={item.id} content={item.ingredient_text} userID={userID} getShoppingItems={getShoppingItems}/>
      </CSSTransition>
    )
  });

  return(
    <div>
      <Navbar/>
      <section className="landingPage2">
      </section>
      <h3 className="subtitle">You have {items.length} item{items.length === 1 ? '' : 's'} in your shopping list:</h3>
      <div className="List">
        <ul>        
          <TransitionGroup>{itemArr}</TransitionGroup>
        </ul>
      </div>
    </div>
  )
}

export default ShoppingListPage