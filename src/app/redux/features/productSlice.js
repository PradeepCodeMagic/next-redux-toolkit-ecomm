import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  error: "",
  status:null,
  loadingProduct:false,
}


export const productSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
 
    setproduct: (state, action) => {
      state.products = action.payload.products
      state.status=200
      state.loadingProduct=false
    },

    setProductFailure:(state,action)=>{
      state.error=action.payload.message
      state.status=404
      state.loadingProduct=false
      
    } ,

    setLoading:(state)=>{
      state.loadingProduct=true
    }


   
  },
  
  
})



// Action creators are generated for each case reducer function
export const {setproduct,setProductFailure,setLoading } = productSlice.actions

export default productSlice.reducer