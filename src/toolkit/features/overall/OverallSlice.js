import {createSlice} from "@reduxjs/toolkit";
import itemData from "../../../data/itemData";
import { largeImages, thumbnails } from "../../../data/imgData";

const initialState = {
    items: itemData || [], // default not really needed
    itemAmount: 0,
    isNavbarOpen: false,
    isCartOpen: false,
    isModalGalleryOpen: false,
    isOverlayActive: false,
    largeImages,
    thumbnails,
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
        toggleOverlay: (state) => {
            state.isOverlayActive = !state.isOverlayActive
        },
        toggleModalGallery: (state) => {
            state.isModalGalleryOpen = !state.isModalGalleryOpen
        },
        setActiveGalleryImg: (state, {payload}) => {
            state.currentImage = payload
        },
        setNextImg: (state, {payload}) => {
            state.currentImage = ++state.currentImage
            if (state.currentImage > thumbnails.length - 1) {
                state.currentImage = 0
            }
        },
        setPrevImg: (state, {payload}) => {
            state.currentImage = --state.currentImage
            if (state.currentImage < 0) {
                state.currentImage = thumbnails.length -1;
            }
        },
    }
})

export const {toggleCartOpen,toggleNavbarOpen, setActiveGalleryImg, setNextImg, setPrevImg, toggleOverlay, toggleModalGallery} = overallSlice.actions

export default overallSlice.reducer


