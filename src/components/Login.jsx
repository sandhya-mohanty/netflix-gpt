import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="" />
      </div>
      <form  className='absolute my-36 p-12 bg-black/70 text-white w-full max-w-md flex flex-col mx-auto right-0 left-0 rounded-lg'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm? "Sign In":"SignUp"}</h1>
        {!isSignInForm && <input type="text" placeholder='Enter Full Name' className='p-4 my-4 w-full bg-gray-700' />}
        <input type="text" placeholder='Enter Email Id' className='p-4 my-4 w-full bg-gray-700' />
        <input type="password" placeholder='Enter Password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-6 bg-red-700 rounded-lg w-full cursor-pointer' type='submit'>{isSignInForm? "Sign In":"Sign Up"}</button>        
              <p className='py-4' onClick={toggleSignUpForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Allready registred?Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login