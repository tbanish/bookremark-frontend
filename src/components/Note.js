import React from 'react'
import { Link } from 'react-router-dom'

const Note = (props) => {
  const renderLinks = () => {
    return <Link to={`/books/${props.note && props.note.bookId}/notes/${props.note && props.note.id}/edit`}>Edit</Link>
  }

  return(
    <div>
      <h1>{props.note && props.note.title}</h1>
      <p>{props.note && props.note.content}</p>
      {renderLinks()}
    </div>
  )
}

export default Note
