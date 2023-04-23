import React from 'react';
import Navbar from './Navbar';
import Form from './Form';

const LoginPage = () => {
  return(
    <>
    <nav className="Navbar">          
       <div className="navbar-header ">
            <h1>PANTRY PAL</h1>
          </div>          
    </nav>
    <div className="loginContainer">
      <h4 className="">Welcome to Pantry Pal,...!</h4>
      <Form/>
    </div>
    </>
  )
}

export default LoginPage;