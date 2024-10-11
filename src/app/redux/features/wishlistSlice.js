import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist: JSON.parse(localStorage.getItem("wishlistLocal")) || [] ,
    loading:false

}


export const wishlistSlice = createSlice({
    
  name: 'wishlistData',
  initialState,
  reducers: {
    
    setWishlist:(state,action)=>{
        state.wishlist.push(action.payload)
        localStorage.setItem("wishlistLocal",JSON.stringify(state.wishlist))
    }
    ,
    loading:(state)=>{
        state.loading=true
    },
    removeWishItem:(state,action)=>{
        let finalData=state.wishlist.filter((v)=> v.id!==action.payload.id)
        state.wishlist=finalData
        localStorage.setItem("wishlistLocal",JSON.stringify(finalData))
    }
   
  },
  
  
})



// Action creators are generated for each case reducer function
export const {setWishlist,loading,removeWishItem} = wishlistSlice.actions

export default wishlistSlice.reducer