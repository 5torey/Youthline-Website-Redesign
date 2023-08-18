import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import Links from './Links'
import './App.scss' 
import './css/Header.scss'

function App() {
  return (
    <HashRouter>
      <Header/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}
export default App



