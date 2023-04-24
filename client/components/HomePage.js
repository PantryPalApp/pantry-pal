import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';
import IngredientsList from './IngredientsList';
import "../style.css";

const HomePage = ({userID}) => {

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

  return(
    <div>
      <Navbar/>
      <section className="landingPage">
         {/* <p style={{color: 'white'}}>
          Welcome to Pantry Pal
        </p>  */}
      </section>

      <div className="featured">
        <section className="wrapper">
          <RecipeCard {...recipes[0]} userID={userID}/>
          <article className="card">
            <p style={{fontWeight: '1000'}}>Click ingredients to add to your shopping list!</p>
          <IngredientsList {...recipes[0]} userID={userID}/>
          </article>
        </section>
        <section className="wrapper">
          <RecipeCard {...recipes[1]} userID={userID} />
          <article className="card">
            <p style={{fontWeight: '1000'}}>Click ingredients to add to your shopping list!</p>
          <IngredientsList {...recipes[1]} userID={userID}/>
          </article>
        </section>
      </div>
    </div>
    
 ) 
 
}

export default HomePage;