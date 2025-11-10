import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/home'
import Diagnosis from './pages/diagnosis/Diagnosis'
import MSRemedies from './pages/Remidies/MSRemedies'
import MSConsultation from './pages/consultation/Consultation'
import Contact from './pages/contact/Contact'

function App() {
  
  const [navBlur, setNavBlur] = useState(false);
  
  const handleScroll = (e) => {
    // console.log(e.target.scrollTop);
    if(e.target.scrollTop > 100){
      setNavBlur(true)
    }else{
      setNavBlur(false)
    }
  };
  
  return (
    <div className='h-screen w-screen overflow-y-auto overflow-x-hidden' onScroll={(e)=>handleScroll(e)}>
      <Navbar navBlur={navBlur} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/remedies" element={<MSRemedies />} />
        <Route path="/consultation" element={<MSConsultation />} />
        {/* <Route path="/contact" element={<Contact />} />*/}
      </Routes>
      <Footer />
    </div>
  )
}

export default App