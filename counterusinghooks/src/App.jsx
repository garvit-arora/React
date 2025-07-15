import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);

  // let counter = 15;
  const AddValue = () =>{
    // console.log("Clicked",counter);
    if(counter<=19){
      counter = counter+1;
    setCounter(counter);
    }
    else{
      return counter;
    }
  }
  const ReduceValue = () =>{
    // console.log("clicked",counter);
    if(counter>0){
      counter = counter - 1;
      setCounter(counter);
    }
    else{
      return counter;
    }
    
  }
  return (
    <>
    <h1>Garvit Aur React</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={AddValue}>Add Value</button>
    <br />
    <button onClick={ReduceValue}>Reduce Value</button>
    </>
  )
}

export default App
