import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Alltool from '../pages/alltool'
import PaymentActivity from '../pages/PaymentActivity'
import Content from '../pages/Content'

const Router = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alltools' element={<Alltool/>} />
        <Route path='/payment-activity' element={<PaymentActivity />} />
        <Route path='/postandreel' element={<Content />} />
    </Routes>
   
  )
}

export default Router
