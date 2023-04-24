import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

const Navbar = () => {
  //links to other routes in react router dom
  return (<div className='Navbar'>
    <Link to='/home'>
      Home
    </Link>
    <Link to='/recipes'>
      Recipes
    </Link>
    <Link to='/shopping-list'>
      Shopping List
    </Link>
    <Link to='/'>
      Log Out
    </Link>
  </div>
  )
}

export default Navbar;