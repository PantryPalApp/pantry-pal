import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RecipesPage from "./components/RecipesPage";
import ShoppingListPage from "./components/ShoppingListPage";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  //State to store our user ID
  //real login would set a cookie along with some kind of cookie database and protected routes
  const [userID, setUserID] = useState(1)
  function userLogin(userID) {
    setUserID(userID);
  }

  return(
    <BrowserRouter>
      <Routes>
        {/* Default route is the login page */}
        <Route path='/' element={<LoginPage userLogin={userLogin}/>}/>
        {/* After logging in, the user can go to these routes with NavBar */}
        <Route path='/home' element={<HomePage userID={userID}/>}/>
        {/* displays all the recipe cards */}
        <Route path='/recipes' element={<RecipesPage userID={userID}/>}/>
        {/* Items gets added to shopping list from the recipe card */}
        <Route path='/shopping-list' element={<ShoppingListPage userID={userID}/>}/>
        {/* Error route if url doesnt exist */}
        {/* <Route path='*' element={<ErrorPage userID={userID}/>}/> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App;