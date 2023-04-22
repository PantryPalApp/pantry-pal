import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

const Navbar = () => {
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
  </div>
  )
}

export default Navbar;