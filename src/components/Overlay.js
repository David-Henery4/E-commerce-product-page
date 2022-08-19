import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  toggleNavbarOpen,
  toggleOverlay,
  toggleModalGallery
} from "../toolkit/features/overall/OverallSlice";

const Overlay = () => {
  const dispatch = useDispatch()
  const { isOverlayActive, isNavbarOpen, isModalGalleryOpen } = useSelector(
    (store) => store.overall
  );
  return <div onClick={() => {
    dispatch(toggleOverlay());
    if (isNavbarOpen){
      dispatch(toggleNavbarOpen())
    }
    if (isModalGalleryOpen){
      dispatch(toggleModalGallery())
    }
  }} className={isOverlayActive ? "overlay overlay-active" : "overlay"}></div>;
}

export default Overlay