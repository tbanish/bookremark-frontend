import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import NoteList from './NoteList'
import '../css/Note.css'

const Note = (props) => {

  const renderLinks = () => {
    return <Link to={`/books/${props.note && props.note.bookId}/notes/${props.note && props.note.id}/edit`}>edit</Link>
  }

  const handleClick = () => {
    props.deleteNote(props.note.id)
    props.history.push(`/books/${props.note.bookId}`)
  }

  const renderContent = () => {
    if (props.note) {
      return (
        <>
        <div id="notecol1">
          <NoteList book={props.book} notes={props.notes}/>
        </div>
        <div id="notecol2">
          <h1>{props.book && props.book.attributes.title}</h1>
          <h2>{props.note && props.note.title}</h2>
          <p>{props.note && props.note.content}</p><br/>
          <div className="noteDeleteEdit">
            <input onClick={() => handleClick()} type="button" value="delete"/>
            {renderLinks()}
          </div>
        </div>
        <div id="notecol3">
          <div>
            <h3>Links</h3>
            <Link to={`/books/${props.book && props.book.id}/reading-sessions/new`}>New Reading Session</Link><br/><br/>
            <Link to={`/books/${props.book && props.book.id}/reading-sessions`}>Reading Sessions</Link><br/><br/>
            <Link to={`/books/${props.book && props.book.id}/edit`}>Edit Book</Link><br/><br/>
            <Link to={`/books/${props.book && props.book.id}`}>Book Page</Link>
          </div>
        </div>
        </>
      )
    } else {
      return <Redirect to="/"/>
    }
  }

  return(
    <div className="Note">
      {renderContent()}
    </div>
  )
}

export default Note
