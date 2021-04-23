import React from 'react'
import {Link} from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h1>404.</h1>
      <h2>uh oh ... we're not sure what you're looking for.</h2>
      <p>a little lost?</p>
      <p>maybe take a break and <Link to={'/books/reading-list'}>go read a book</Link>.</p>
    </div>
  )
}

export default NoMatch
