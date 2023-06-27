import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'button',
    initialState:true,
    reducers:{
        toogle:(state,actions)=>(actions.payload)
    }
})
console.log(slice.actions)
export const {toogle}=slice.actions

export const store=configureStore(
  {
    reducer:{
        button:slice.reducer
    }
  }
)