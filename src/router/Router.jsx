import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PaymentActivity from '../pages/PaymentActivity'
import Content from '../pages/Content'

const Router = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment-activity' element={<PaymentActivity />} />
        <Route path='/content' element={<Content />} />
    </Routes>
   
  )
}

export default Router
