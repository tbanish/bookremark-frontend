import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <div>
      <NavLink to="/">Home | </NavLink>
      <NavLink to="/books/reading-list">Reading List | </NavLink>
      <NavLink to="/books/bookshelf">Book Shelf</NavLink>
    </div>
  )
}

export default NavBar
