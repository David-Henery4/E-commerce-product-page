import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleNavbarOpen } from '../toolkit/features/overall/OverallSlice';

const Overlay = () => {
  const dispatch = useDispatch()
  const {isNavbarOpen} = useSelector(store => store.overall)
  // needs "overlay-active"
  return <div onClick={() => dispatch(toggleNavbarOpen())} className={isNavbarOpen ? "overlay overlay-active" : "overlay"}></div>;
}

export default Overlay