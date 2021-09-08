import { createStore } from 'redux'
import cartItems from '../cart-items'
import reducer from './reducer'

const initialData = {
  cart: cartItems,
  amount: 0,
  total: 0
}
const store = createStore(reducer, initialData)

export default store
