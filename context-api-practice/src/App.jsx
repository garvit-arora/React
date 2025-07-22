import { useState } from 'react'
import './App.css' 
import UserContextProvider from '../../context-api-practice/src/context/UserContextProvider'
import Login from '../../context-api-practice/src/components/Login'
import Profile from '../../context-api-practice/src/components/Profile'


function App() {


  return (
    <>
    <UserContextProvider>
    <h1>React Context API practice Module</h1>
    <Login />
    <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
