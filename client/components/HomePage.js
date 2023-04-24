import React from 'react';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';
import IngredientsList from './IngredientsList';
import "../style.css";

const HomePage = () => {
  const mainRecipe = {image: 'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg', 
    cuisineType : 'Italian', 
    label : 'Chicken Alfredo', 
    calories: 300, 
    instructions: 'https://bellyfull.net/chicken-alfredo-recipe/'}
  return(
    <div>
      <Navbar/>
      <section className="landingPage">
        <p style={{color: 'white'}}>
          Chicken Alfredo
        </p>
      </section>
      <div className="featured">
        <section className="wrapper">
          {/* show one recipe card and list for the item in background */}
          {/* <h5 className="section-name">View our featured recipe!</h5> */}
          <RecipeCard {...mainRecipe}/>
          <article className="card">
            <p style={{fontWeight: '1000'}}>Click ingredients to add to your shopping list!</p>
          <IngredientsList ingredients={['1 cup Flour', '1 cup water']}/>
          </article>
        </section>
        <section className="wrapper">
          <RecipeCard {...mainRecipe}/>
          <article className="card">
            <p style={{fontWeight: '1000'}}>Click ingredients to add to your shopping list!</p>
          <IngredientsList ingredients={['1 cup Flour', '1 cup water']}/>
          </article>
        </section>
      </div>
    </div>
    
  )
}

export default HomePage;