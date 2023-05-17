import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Alltool from '../pages/alltool'
import PaymentActivity from '../pages/PaymentActivity'
import Content from '../pages/Content'
import PageNotFound from '../pages/PageNotFound'
import AddPayment from '../pages/AddPayment'
import AddContent from '../pages/AddContent'
const Router = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alltools' element={<Alltool/>} />
        <Route path='/payment-activity' element={<PaymentActivity />} />
        <Route path='/content' element={<Content />} />
        <Route path='/add-payment' element={<AddPayment />} />
        <Route path='/postandreel' element={<Content />} />
        <Route path='/add-content' element={<AddContent />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
   
  )
}

export default Router
