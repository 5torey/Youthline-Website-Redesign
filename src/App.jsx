import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './Links'
import './App.css' 

function App() {
  return (
    <HashRouter>
      <Header/>
      <div className="wrapper">
      <Links/>
      <Footer/>
      </div>
     
    </HashRouter>
  )
}
export default App



