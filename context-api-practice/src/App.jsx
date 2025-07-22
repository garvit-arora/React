import { useState } from 'react'
import './App.css' 
import UserContext from '../../context-api/src/context/UserContext'
import UserContextProvider from '../../context-api/src/context/UserContextProvider'
import Login from '../../context-api/src/components/Login'
import Profile from '../../context-api/src/components/Profile'


function App() {


  return (
    <>
    <UserContextProvider>
    <h1>React Context PI practice Module</h1>
    <Login />
    <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
