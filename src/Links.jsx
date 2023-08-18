import React from 'react'
import { Routes, Route} from 'react-router-dom'


// Import Pages
import Home from './pages/Home'
import Store from './pages/store/Store'
import Donation from './pages/Store/Product'

// Import Components 
import Post from './components/Post'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Advice from './components/Advice'
import Hero from './components/Hero'
import Product from './pages/Store/Product'


const Links = () => {
  return (
    <Routes>
    {/* Home */}
      <Route exact path="/" element={<Home />} />
      {/* Pages */}
      <Route path="/store/" element={<Store />} />
      <Route path="/product/:id" element={<Product />} />
      {/* Components */}
      <Route path="/post/:id" element={<Post />}/>
      <Route path="/hero" element={<Hero />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/advice" element={<Advice />} />

  </Routes>
  )
}

export default Links
