import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Exchange from './pages/Exchange'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/exchange' element={<Exchange />} />
    </Routes>
  )
}

export default App