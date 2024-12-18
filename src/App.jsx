import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='w-full h-screen bg-red-500 flex'>
      <Home />
    </div>
  )
}

export default App
