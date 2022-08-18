import {createSlice} from "@reduxjs/toolkit";
import itemData from "../../../data/itemData";

const initialState = {
    items: itemData || [], // default not really needed
    itemAmount: 0,
    isNavbarOpen: false,
    isCartOpen: false,
    currentImage: 0,
    
}

const overallSlice = createSlice({
    name: "overall",
    initialState,
    reducers:{
        toggleCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        toggleNavbarOpen: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
            console.log(state.isNavbarOpen)
        },
    }
})

export const {toggleCartOpen,toggleNavbarOpen} = overallSlice.actions

export default overallSlice.reducer


