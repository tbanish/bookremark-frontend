import React from 'react'
import {NavLink} from 'react-router-dom'
import { GiRead } from "react-icons/gi";
import '../css/NavBar.css'

const NavBar = () => {
  return(
    <div className="NavBar">
      <GiRead className="GiRead"/><br/>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books/reading-list">Reading List</NavLink>
      <NavLink to="/books/bookshelf">Book Shelf</NavLink>
      <NavLink to="/books/new">Add a Book</NavLink>
    </div>
  )
}

export default NavBar
