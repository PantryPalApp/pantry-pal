


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [registering, setRegistering] = useState(false);
  const [form , setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
  });
    
  const navigate = useNavigate();

//This methods will update the state properties,
  function updateForm(value){
    return setForm((prev) => {
        return {...prev, ...value};
    });
  }

async function register() {
    const newUser = {...form};

    //add user to user table when submitted
    const registerResponse = await fetch("http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      .catch(error => {
        console.log(error);
        return;
      });

    const registeredUser = await registerResponse.json();
    setForm({firstName: "", lastName: "", email: "", password:""});

  };

  async function login(){
    navigate("/home");

    // Need to check users table for log in

  //   console.log("inside login async,", loggedinuser);
  //   const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(loggedinuser),
  //   });
  //  const loggedIn = await loggedInResponse.json();
    // console.log('inside login async, loggedIn:' , loggedIn);
    // console.log('inside login async, user:' , loggedinuser);
    
    //save the logged in user somewhere
  //  if (loggedIn) {
  //     dispatch(
  //       setLogin({
  //         user: loggedIn.email,
  //         token: loggedIn.token,
  //       })
  //     );
    //   navigate("/home");
    // }
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (registering) await register();
    else await login();
  };

    
return (
 <form className="loginForm" onSubmit={(e) => handleFormSubmit(e)}> 

    {registering && (
    <>
    <div className="mb-4">
      <label
        htmlFor="firstName"
        className="form-label">
        First Name :
      </label>
      <input type="text" className="form-control" onChange={(e)=> updateForm({firstName: e.target.value})} id="firstName" aria-describedby="firstName"/>
    </div>
    <div className="mb-4">
    <label
        htmlFor="lastName"
        className="form-label">
        Last Name :
      </label>
      <input type="text" className="form-control" onChange={(e)=> updateForm({lastName: e.target.value})} id="lastName" aria-describedby="lastName"/>                      
    </div>
   
     
    </>
    )}
    <div className="mb-4">
      <label
          htmlFor="email"
          className="form-label">
          Email :
       </label>
        <input type="email" className="form-control" onChange={(e)=> updateForm({email: e.target.value})} id="email" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-4">
      <label
          htmlFor="password"
          className="form-label">
          Password :
       </label>
        <input type="password" className="form-control" onChange={(e)=> updateForm({password: e.target.value})} id="password" aria-describedby="password"/>
    </div>
    <div>
        <button type="submit" className="btn btn-xl btn-primary">{!registering ? "LOGIN" : "REGISTER"}</button>
    </div>
    <div className='mt-5 signup'>
      <a href="#"
      onClick={() => {
        setRegistering(!registering);
      }}>
     {!registering 
     ? "Don't have an account? Sign Up here."
     : "Already have an account? Login here."}
     </a>
    </div>
 </form> 
)
}

export default Form;


// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { setLogin, setUser } from "../../reducers/userReducer.js";
// import { useNavigate } from "react-router-dom";
// import Dropzone from "react-dropzone";

// // const registerSchema = yup.object().shape({
// //     firstName: yup.string().required("required"),
// //     lastName: yup.string().required("required"),
// //     email: yup.string().email("invalid email").required("required"),
// //     password: yup.string().required("required"),
// //     //picture: yup.string().required("required"),
// // });
  
// // const loginSchema = yup.object().shape({
// //     email: yup.string().email("invalid email").required("required"),
// //     password: yup.string().required("required"),
// // });

// // const initialValuesRegister = {
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //    // picture: "",
// // };

// // const initialValuesLogin = {
// //     email: "",
// //     password: "",
// //   };


  

// const Form = () => {
//  const [pageType, setPageType] = useState("login");
//  const [form , setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     picturePath: "",
//  });
   
//  const navigate = useNavigate();
// //   const [firstName, setfirstName] = useState('');
// //   const [lastName, setlastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const isLogin = pageType === "login";
//   const isRegister = pageType === "register";

// //This methods will update the state properties,
//   function updateForm(value){
//     return setForm((prev) => {
//         return {...prev, ...value};
//     });
//   }
// //This function will handle
// // const handleFormSubmit = (e) => {
// //     e.preventDefault();

// //     dispatch(setLogin({
// //         firstName: firstName,
// //         lastName: lastName,
// //         email: email,
// //         password: password,
// //         loggedIn: true,
        
//  //   }));

//  //   navigate("/home");
// //}
// async function register() {
    
//     const newUser = {...form};
    

//     const registerResponse = await fetch("http://localhost:3001/auth/register",
//       {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       })
//       .catch(error => {
//         window.alert(error);
//         return;
//       });
//     const registeredUser = await registerResponse.json();
//     setForm({firstName: "", lastName: "", email: "", password:"", picturePath:""});
//     if(registeredUser){
//         dispatch(setUser({
//             firstName: registeredUser.firstName,
//             lastName: registeredUser.lastName,
//             email: registeredUser.email,
//             password: registeredUser.password,
//             picturePath: registeredUser.picturePath,
//             loggedIn: true,
                    
//         }));
//     setPageType("login");
//     }
    
//   };
// const loggedinuser = useSelector((state)=> state.user);
// async function login(){

// console.log("inside login async,", loggedinuser);
//     const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(loggedinuser),
//     });
//    const loggedIn = await loggedInResponse.json();
//     // console.log('inside login async, loggedIn:' , loggedIn);
//     // console.log('inside login async, user:' , loggedinuser);
    
//    if (loggedIn) {
//       dispatch(
//         setLogin({
//           user: loggedIn.email,
//           token: loggedIn.token,
//         })
//       );
//       navigate("/home");
//     }
//   };

//   async function handleFormSubmit(e) {
//     e.preventDefault();

//     if (isLogin) await login();
//     if (isRegister) await register();
//   };

    
// return (
//  <form className="col-4" onSubmit={(e) => handleFormSubmit(e)}> 

//     {isRegister && (
//     <>
//     <div className="mb-4">
//       <label
//         htmlFor="firstName"
//         className="form-label">
//         First Name :
//       </label>
//       <input type="text" className="form-control" onChange={(e)=> updateForm({firstName: e.target.value})} id="firstName" aria-describedby="firstName"/>
//     </div>
//     <div className="mb-4">
//     <label
//         htmlFor="lastName"
//         className="form-label">
//         Last Name :
//       </label>
//       <input type="text" className="form-control" onChange={(e)=> updateForm({lastName: e.target.value})} id="lastName" aria-describedby="lastName"/>                      
//     </div>
   
//      <div className="mb-4">
//         <label
//           htmlFor="formFile"
//           className="form-label"
//          >
//           Profile Picture :
//        </label>
//       <input type="file" className="form-control" id="formFile" onChange={(e)=> updateForm({picturePath: e.target.value})} aria-describedby="picture"/>
//       </div> 
//     </>
//     )}
//     <div className="mb-4">
//       <label
//           htmlFor="email"
//           className="form-label">
//           Email :
//        </label>
//         <input type="email" className="form-control" onChange={(e)=> updateForm({email: e.target.value})} id="email" aria-describedby="emailHelp"/>
//     </div>
//     <div className="mb-4">
//       <label
//           htmlFor="password"
//           className="form-label">
//           Password :
//        </label>
//         <input type="password" className="form-control" onChange={(e)=> updateForm({password: e.target.value})} id="password" aria-describedby="password"/>
//     </div>
//     <div>
//         <button type="submit" className="btn btn-xl btn-primary">{isLogin ? "LOGIN" : "REGISTER"}</button>
//     </div>
//     <div className='mt-5 signup'>
//       <a href="#"
//       onClick={() => {
//         setPageType(isLogin ? "register" : "login");
//       }}>
//      {isLogin 
//      ? "Don't have an account? Sign Up here."
//      : "Already have an account? Login here."}
//      </a>
//     </div>
//  </form> 
// )
// }

// export default Form;
