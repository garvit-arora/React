import {useDispatch} from 'react-redux'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import {} from "./store/authSlice"

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getUserAccount()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        
      }
    })
    .finally()
  })



  return (
    <>
    
        <h1>Mega Project</h1>
    </>
  )
}

export default App
