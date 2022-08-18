import React from 'react'
import { Close } from '../SVGs'
import navData from "../data/navData"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleNavbarOpen } from '../toolkit/features/overall/OverallSlice'

const Sidebar = () => {
  const { isNavbarOpen } = useSelector((store) => store.overall);
  const dispatch = useDispatch()

  // sidebar-active
  return (
    <aside className={isNavbarOpen ? "sidebar sidebar-active" : "sidebar"}>
      <Close className="sidebar-close" onClick={() => dispatch(toggleNavbarOpen())}/>
      <ul className="sidebar-links">
        {navData.map((link) => {
          return (
            <a key={link.id} className="sidebar-links__link" href="#">
              {link.name}
            </a>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar