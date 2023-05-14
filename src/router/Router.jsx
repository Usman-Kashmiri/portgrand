import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Alltool from '../pages/alltool'

const Router = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alltools' element={<Alltool/>} />
    </Routes>
   
  )
}

export default Router
