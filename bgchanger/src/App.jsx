import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [color, setColor] = useState("Black");
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed bottom-0 w-full flex justify-center">
          <div className="mb-5 w-[50vw] h-15 rounded-full  bg-amber-50 border border-amber-400">
            <div className="flex gap-10 justify-center p-2.5">
              <button className="bg-blue-400 rounded w-30 h-10" onClick={()=>{setColor("cyan")}}>Cyan</button>
              <button className="bg-blue-900 rounded w-30 h-10" onClick={()=>{setColor("Blue")}}>Blue</button>
              <button className="bg-yellow-400 rounded w-30 h-10" onClick={()=>{setColor("Yellow")}}>
                Yellow
              </button>
              <button className="bg-red-600 rounded w-30 h-10" onClick={()=>{setColor("Red")}}>Red</button>
              <button className="bg-pink-600 rounded w-30 h-10" onClick={()=>{setColor("Pink")}}>Pink</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
