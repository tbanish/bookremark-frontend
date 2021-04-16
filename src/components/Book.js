import React from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => {
  const renderLinks = () => {
    return (
      <Link to={`/books/${props.book.id}/reading-sessions`}>Reading Sessions</Link>
    )
  }

  return(
    <div>
      <h1>{props.book && props.book.attributes.title}</h1>
      <p>By {props.book && props.book.attributes.author}</p>
      {renderLinks()}
    </div>
  )
}

export default Book