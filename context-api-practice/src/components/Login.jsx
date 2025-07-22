import React, { useContext, useState } from 'react'
import UserContext from '../../../context-api-practice/src/context/UserContext'
function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})
}

    return (
       <>
       <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}  />
       {" "}
       <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={handleSubmit}>Submit</button>
       </> 
    )
}

export default Login
