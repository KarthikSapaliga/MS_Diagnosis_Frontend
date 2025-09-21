import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home/home'

function App() {
  return (
    <div className='h-screen w-screen overflow-y-auto overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/diagnosis" element={<h1>Diagnosis</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
      </Routes>
    </div>
  )
}

export default App