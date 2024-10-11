import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/productSlice'
import wishlistSlice from './features/wishlistSlice'
import  cartSlice  from './features/cartSlice'

export const store = configureStore({
  reducer: {
    product:productSlice,
    wish:wishlistSlice,
    cart:cartSlice,
  },
})