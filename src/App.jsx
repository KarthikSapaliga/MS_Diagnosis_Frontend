import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/home'
import Diagnosis from './pages/diagnosis/Diagnosis'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div className='h-screen w-screen overflow-y-auto overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App