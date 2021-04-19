import React from 'react'
import { Link } from 'react-router-dom'

const ReadingSession = (props) => {
  const renderLinks = () => {
    return(
      <div>
        <Link to={`/books/${props.match.params.id}/reading-sessions/new`}>New Reading Session</Link><br/>
        <Link to={`/books/${props.readingSession && props.readingSession.book_id}/reading-sessions/${props.readingSession && props.readingSession.id}/edit`}>Edit Reading Session</Link>
      </div>
    )
  }

  const handleClick = () => {
    props.deleteReadingSession(props.readingSession)
    props.deleteNotes(props.readingSession.id)
    props.history.push(`/books/${props.readingSession.book_id}/reading-sessions`)
  }

  const handleDeleteNote = (event) => {
    const noteId = parseInt(event.target.id)
    props.deleteNote(noteId)
  }

  const renderNotes = () => {
    return props.notes.map(note =>
      <div key={note.id}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <input onClick={(event) => handleDeleteNote(event)} id={note.id} type="button" value="delete note"/>
      </div>
    )
  }

  return(
    <div>
      <h1>{props.readingSession && props.readingSession.title}</h1>
      {renderLinks()}<br/><br/>
      <p>Date: {props.readingSession && props.readingSession.date}</p>
      <p>Duration: {props.readingSession && props.readingSession.duration}</p>
      <input onClick={() => handleClick()} type="button" value="delete"/><br/>
      {renderNotes()}
    </div>
  )
}

export default ReadingSession
