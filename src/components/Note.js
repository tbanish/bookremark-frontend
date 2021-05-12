import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import NoteList from './NoteList'
import ReadingSessionList from './ReadingSessionList'
import '../css/Note.css'

const Note = (props) => {

  const renderLinks = () => {
    return <Link to={`/books/${props.note.bookId}/notes/${props.note.id}/edit`}>edit</Link>
  }

  const renderNoteNavLinks = () => {
    return (
      <div className="bookNavLinks">
        <Link to={`/books/${props.book.id}/reading-sessions/new`}>New Reading Session</Link>
        <Link to={`/books/${props.book.id}/edit`}>Edit Book</Link>
        <Link to={`/books/${props.book.id}`}>Book Details</Link>
      </div>
    )
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
          <h1>{props.book.attributes.title}</h1>
          {renderNoteNavLinks()}
          <h2>{props.note.title}</h2>
          <p>{props.note.content}</p><br/>
          <div className="noteDeleteEdit">
            <input onClick={() => handleClick()} type="button" value="delete"/>
            {renderLinks()}
          </div>
        </div>
        <div id="notecol3">
          <ReadingSessionList readingSessions={props.readingSessions}/>
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
