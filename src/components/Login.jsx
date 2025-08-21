import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {  USER_PhotoURL } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      return;
    } 
    if (!isSignInForm) {
      //sign up logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: USER_PhotoURL
}).then(() => {
  const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName :displayName, photoURL:photoURL})); 
}).catch((error) => {
setErrorMessage(error.message);
});
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
    } else {
      //sign in logic here  
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
  };
   
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="min-h-screen object-cover w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute my-36 p-12 bg-black/70 text-white w-full max-w-md flex flex-col mx-auto right-0 left-0 rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter Email Id"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 rounded-lg w-full cursor-pointer"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Allready registred?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
