import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Alltool from '../pages/alltool'
import PaymentActivity from '../pages/PaymentActivity'
import Content from '../pages/Content'
import PageNotFound from '../pages/PageNotFound'
import AddPayment from '../pages/AddPayment'
import AddContent from '../pages/AddContent'
import TransactionDetails from '../pages/TransactionDetails'
import Login from '../pages/Login'
import AuthUser from '../Config/UserAuth'
const Router = () => {
  const { getToken, token } = AuthUser();
  const gtoken = getToken();
  return (

    <Routes>
      {gtoken ? (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/alltools' element={<Alltool />} />
          <Route path='/payment-activity' element={<PaymentActivity />} />
          <Route path='/transaction-details' element={<TransactionDetails />} />
          <Route path='/content' element={<Content />} />
          <Route path='/add-payment' element={<AddPayment />} />
          <Route path='/update-payment' element={<AddPayment />} />
          <Route path='/add-content' element={<AddContent />} />
          <Route path='/update-content' element={<AddContent />} />
          <Route path='*' element={<PageNotFound />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/postandreel' element={<Content />} />
          <Route path='/alltools' element={<Alltool />} />
          <Route path='/payment-activity' element={<PaymentActivity />} />
          <Route path='/transaction-details' element={<TransactionDetails />} />
          <Route path='/content' element={<Content />} />
          <Route path='*' element={<PageNotFound />} />
        </>
      )}
    </Routes>

  )
}

export default Router
