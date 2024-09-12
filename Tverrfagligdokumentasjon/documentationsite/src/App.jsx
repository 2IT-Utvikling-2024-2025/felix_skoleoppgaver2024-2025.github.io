import React, { useState } from 'react'
import Navbar from './components/Navbar'
import PagesManager from './pages/PagesManager'


const App = () => {

  const [page, setPage] = useState('introduction')

  return (
    <>
      <Navbar setPage={setPage} />
      <PagesManager page={page} />
    </>
  )
}

export default App