import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const appRouter=createBrowserRouter([
    {path:'/',element:<Login/>},
    {path:'/browser',element:<Browser/>}
  ])
 
  return (
    <div>
     <RouterProvider router={appRouter}/>
       
    </div>
  )
}

export default Body