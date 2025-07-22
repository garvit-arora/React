import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Root />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<Root />} >
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route
      loader={githubInfoLoader}
    
    path='github' element={<Github />} />
    <Route path='user/:userId' element={<User />} />

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
