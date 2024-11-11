import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Klassekart from './pages/Klassekart'
import Main from './pages/Main'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/klassekart' element={<Klassekart />} />
    </Routes>
  )
}

export default App