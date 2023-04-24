import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RecipesPage from "./components/RecipesPage";
import ShoppingListPage from "./components/ShoppingListPage";
import {BrowserRouter} from "react-router-dom";

const App = () =>{
  //add protected route 
  const [userID, setUserID] = useState(1)
  function userLogin(userID) {
    setUserID(userID);
  }

  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LoginPage userLogin={userLogin}/>}/> */}
        <Route path='/' element={<ShoppingListPage userID={userID}/>}/>
        <Route path='/home' element={<HomePage userID={userID}/>}/>
        <Route path='/recipes' element={<RecipesPage userID={userID}/>}/>
        <Route path='/shopping-list' element={<ShoppingListPage userID={userID}/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;