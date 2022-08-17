import React from 'react'
import { Close } from '../SVGs'
import navData from "../data/navData"

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Close className='sidebar-close'/>
      <ul className='sidebar-links'>
      {navData.map(link => {
        return (
          <a key={link.id} className="sidebar-links__link" href="#">
            {link.name}
          </a>
        )
      })}
      </ul>
    </aside>
  )
}

export default Sidebar