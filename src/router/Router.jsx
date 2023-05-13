import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PaymentActivity from '../pages/PaymentActivity'

const Router = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment-activity' element={<PaymentActivity />} />
    </Routes>
   
  )
}

export default Router
