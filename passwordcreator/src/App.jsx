import React, { useRef } from 'react'
import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [characters,setCharacters] = useState(false)
  const [password,setPassword] = useState("")

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password);
      alert("Password has been Copied Successfully !!");
    },[password])

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    


    if(numberAllowed) str+="0123456789"
    if(characters) str+="!@#$%^&*(){}=-+_:;<>?,./|`"
    
    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()*str.length+1);
        pass += str.charAt(char);
        setPassword(pass);   
    }

  },[length,numberAllowed,characters,setPassword])
useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characters,passwordGenerator])
  return (
    <>

      <div className="bg-blue-950 p-3 rounded-lg">
    <h1 className='text-6xl text-center font-bold'>Password Generator</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-xl font-bold">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full h-15 py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev)}}  />
            <label htmlFor="numberInput">Numbers</label>
          </div>
           <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characters} id='numberInput' onChange={()=>{setCharacters((prev)=>!prev)}}  />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
