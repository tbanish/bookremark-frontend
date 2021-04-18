import React from 'react'
import NoteList from './NoteList.js'
import { Link } from 'react-router-dom'

const Book = (props) => {
  const renderLinks = () => {
    return (
      <div>
        <Link to={`/books/${props.book && props.book.id}/reading-sessions`}>Reading Sessions</Link><br/><br/>
        <Link to={`/books/${props.book && props.book.id}/edit`}>Edit Book</Link>
      </div>
    )
  }

  const handleClick = () => {
    props.deleteBook(props.book.id)
    props.deleteReadingSessions(props.book.id)
    props.history.push('/books/reading-list')
  }

  return(
    <div>
      <h1>{props.book && props.book.attributes.title}</h1>
      <p>By {props.book && props.book.attributes.author}</p>
      <input onClick={() => handleClick()} type="button" value="delete" /><br/><br/>
      {renderLinks()}<br/>
      <NoteList book={props.book} notes={props.notes}/>
    </div>
  )
}

export default Book
