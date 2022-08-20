import { createSlice } from "@reduxjs/toolkit";
import itemData from "../../../data/itemData";
import { largeImages, thumbnails } from "../../../data/imgData";

const initialState = {
  item: itemData,
  cartItems: [],
  itemAmount: 0,
  isNavbarOpen: false,
  isCartOpen: false,
  isModalGalleryOpen: false,
  isOverlayActive: false,
  largeImages,
  thumbnails,
  currentImage: 0,
  sumOfItems: 0,
};

const overallSlice = createSlice({
  name: "overall",
  initialState,
  reducers: {
    toggleCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    toggleNavbarOpen: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
    toggleOverlay: (state) => {
      state.isOverlayActive = !state.isOverlayActive;
    },
    toggleModalGallery: (state) => {
      state.isModalGalleryOpen = !state.isModalGalleryOpen;
    },
    setActiveGalleryImg: (state, { payload }) => {
      state.currentImage = payload;
    },
    setNextImg: (state, { payload }) => {
      state.currentImage = ++state.currentImage;
      if (state.currentImage > thumbnails.length - 1) {
        state.currentImage = 0;
      }
    },
    setPrevImg: (state, { payload }) => {
      state.currentImage = --state.currentImage;
      if (state.currentImage < 0) {
        state.currentImage = thumbnails.length - 1;
      }
    },
    addItemToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
      state.sumOfItems = payload.amountOfItems;
    },
    updateCartItems: (state, { payload }) => {
      if (payload.amount > 0){
        const updateItem = state.cartItems.find((itemInCart) => {
          return itemInCart.id === payload.id;
        });
        updateItem.amountOfItems += payload.amount;
        updateItem.totalPrice =
        (updateItem.price) * (updateItem.amountOfItems);
        state.sumOfItems = updateItem.amountOfItems
      }
    },
    deleteItemFromCart: (state, {payload}) => {
      state.cartItems = payload
    }
  },
});

export const {
  toggleCartOpen,
  toggleNavbarOpen,
  setActiveGalleryImg,
  setNextImg,
  setPrevImg,
  toggleOverlay,
  toggleModalGallery,
  addItemToCart,
  updateCartItems,
  deleteItemFromCart
} = overallSlice.actions;

export default overallSlice.reducer;
