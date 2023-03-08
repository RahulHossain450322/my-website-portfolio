import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Homepages/Home';


import Navbar from './Components/Navbar/Navbar'
import Service from './Components/Services/Service';
import Skil from './Components/Skill/Skil';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/skill' element={<Skil />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
      
    </>
  )
}

export default App

