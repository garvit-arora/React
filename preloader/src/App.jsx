import { useState } from 'react'
import './App.css'

function App() {
const [loading,setLoading] = useState(true)
  return (
    <>
    {loading?<Loader />:<><h1>Welcome to the website.</h1></>}
    </>
  )
}

export default App
