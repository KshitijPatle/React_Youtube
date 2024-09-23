import { createSlice } from "@reduxjs/toolkit";


const sideBarSlice = createSlice({
    name:"sieBar",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleaction:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {toggleaction} = sideBarSlice.actions
export default sideBarSlice.reducer