import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RecipesPage from "./components/RecipesPage";
import ShoppingListPage from "./components/ShoppingListPage";
import {BrowserRouter} from "react-router-dom";

const App = () =>{
  //add protected route 
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LoginPage/>}/> */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/recipes' element={<RecipesPage/>}/>
        <Route path='/shopping-list' element={<ShoppingListPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;