import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: JSON.parse(localStorage.getItem("cartLocal")) || [] ,
    loading:false
}


export const cartSlice = createSlice({
    
  name: 'cartData',
  initialState,
  reducers: {

    setCart:(state,action)=>{
       
        state.cart.push(action.payload);

        localStorage.setItem("cartLocal",JSON.stringify(state.cart))
        console.log("cart", state.cart);

    }
    ,
    setRemoveCart:(state,action)=>{
       
        let finalData=state.cart.filter((v)=> v.id!==action.payload.id)
        state.cart=finalData
        localStorage.setItem("cartLocal",JSON.stringify(finalData))
    }
    ,

   
   
  },
  
  
})




export const {setCart,setRemoveCart} = cartSlice.actions

export default cartSlice.reducer