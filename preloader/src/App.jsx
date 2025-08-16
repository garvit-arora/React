import Loader from './components/Loader/Loader'
import { useState,useEffect } from 'react'
import './App.css'

function App() {
const [loading,setLoading] = useState(false)
useEffect(()=>{
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
},[])

  return (
    <>
    {loading?<Loader />:<><h1>Welcome to the website.</h1></>}
    </>
  )
}

export default App
