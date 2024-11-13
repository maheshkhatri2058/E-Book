import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Blogs from './components/Blog'
import Sellurbook from './components/Sellurbook'
import Shops from './components/Shops'
import Home from './home/Home'
import Singlebookinfo from './home/Singlebook'
const Routeall= () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/shop" element={<Shops/>} />
      <Route path='/singlebook' element={<Singlebookinfo/>} />
      <Route path='/sellyourbook' element={<Sellurbook/>} />
    </Routes>
    </div>
  )
}

export default Routeall
