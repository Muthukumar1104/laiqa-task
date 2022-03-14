import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  function closeNav() {
    document.getElementById('mySidenav').style.width = '0'
  }
  return (
    <div id="mySidenav" class="sidenav">
      <a class="closebtn" onClick={closeNav} style={{ cursor: 'pointer' }}>
        &times;
      </a>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">contact Us</NavLink>
      <NavLink to="/services">Terms of Services</NavLink>
      <NavLink to="/privacy">Privacy Policy</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  )
}
