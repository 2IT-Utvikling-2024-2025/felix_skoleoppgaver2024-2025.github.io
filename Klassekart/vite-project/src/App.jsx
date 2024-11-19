import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateKlassekart from './pages/CreateKlassekart'
import Main from './pages/Main'
import DisplayKlassekart from './pages/DisplayKlassekart'
import Students from './pages/Students'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/klassekart'>
        <Route path=':id' element={<DisplayKlassekart />} />
        <Route path='' element={<CreateKlassekart />} />
      </Route>
      <Route path='/student'>
        <Route path=':id' element={<Students />} />
      </Route>
    </Routes>
  )
}

export default App