import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import { useSelector } from 'react-redux'
// redux stuff
function App () {
  // cart setup
  const data = useSelector(state => state.cart)

  return (
    <main>
      <Navbar />
      <CartContainer cart={data} />
    </main>
  )
}

export default App
