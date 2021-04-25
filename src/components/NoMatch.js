import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NoMatch.css'
import { FaBookDead } from "react-icons/fa";

const NoMatch = () => {
  return (
    <div className="NoMatch">
      <h1>404.</h1>
      <h2>uh oh ... we're not sure what you're looking for.</h2>
      <p>a little lost?</p>
      <p>maybe take a break and <Link to={'/books/reading-list'}>go read a book</Link>.</p>
      <FaBookDead className="FaBookDead"/>
    </div>
  )
}

export default NoMatch
