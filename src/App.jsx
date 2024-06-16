import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './vendorDashboard/pages/LandingPage'
import { NotFound } from './vendorDashboard/components/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App