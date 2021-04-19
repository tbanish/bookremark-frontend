import React from 'react'
import { Link } from 'react-router-dom'

const Note = (props) => {
  const renderLinks = () => {
    return <Link to={`/books/${props.note && props.note.bookId}/notes/${props.note && props.note.id}/edit`}>Edit</Link>
  }

  const handleClick = () => {
    props.deleteNote(props.note.id)
    props.history.push(`/books/${props.note.bookId}`)
  }

  return(
    <div>
      <h1>{props.note && props.note.title}</h1>
      <p>{props.note && props.note.content}</p><br/>
      <input onClick={() => handleClick()} type="button" value="delete"/><br/><br/>
      {renderLinks()}
    </div>
  )
}

export default Note
