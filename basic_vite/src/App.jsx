import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './hello'
import Login from './login'
import Home from './Home'
import Calculate from './calculate'


function App() {
  const place='chennai'

  return (
    <>
   {/* <Hello  place1={place}/>
   <Login/>
   <Home/> */}
   <Calculate/>
   
    </>
  )
}

export default App

