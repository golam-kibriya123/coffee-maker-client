import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>

      <Link to={"/addCoffee"}>add</Link>
      <Link to={"/updateCoffee"}> update</Link>
    </>
  )
}

export default App
