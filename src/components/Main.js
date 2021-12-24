import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Description from './Description'
import ContactUs from './ContactUs'

const Main = () => (
  <main>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/description' element={<Description/>} />
    </Routes>
  </main>
)

export default Main