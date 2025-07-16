
import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'



function App() {

  return (
    <>
    <h1 className='bg-green-700'>Garvit Aur Tailwind</h1>
    <Card song = "Snowman" artist = "Sia" />
    <Card song = "Lonely" artist = "Akon" />
    </>
  )
}

export default App
