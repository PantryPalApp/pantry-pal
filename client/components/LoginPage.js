import React from 'react';
import Navbar from './Navbar';
import Form from './Form';

const LoginPage = ({userLogin}) => {
  return(
    <>
    <nav className="Navbar">          
       <div className="navbar-header ">
            <h1>PANTRY PAL</h1>
       </div>          
    </nav>
    <div className="loginContainer">
      <h4 className="">Welcome to Pantry Pal!<br/>Log In Below and Explore Amazing Recipes Worldwide...</h4>
      <Form userLogin={userLogin}/>
    </div>
    </>
  )
}

export default LoginPage;