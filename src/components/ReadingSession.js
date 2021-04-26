import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/ReadingSession.css'

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
      <div className="readingSessionNote" key={note.id}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <input onClick={(event) => handleDeleteNote(event)} id={note.id} type="button" value="delete note"/>
      </div>
    )
  }

  const renderReadingSessionContent = () => {
    if (props.readingSession !== undefined) {
      return (
        <>
          <div id="readingSessioncol1">
            <h2>{props.readingSession && props.readingSession.title}</h2>
            {renderLinks()}
          <p id="readingSessionDate">Date: {props.readingSession && props.readingSession.date}</p>
            <p id="readingSessionDuration">Duration: {props.readingSession && props.readingSession.duration} minutes</p>
            <input onClick={() => handleClick()} type="button" value="delete"/><br/>
          </div>
          <div id="readingSessioncol2">
            {renderNotes()}
          </div>
        </>
      )
    } else {
      return <Redirect to="/"/>
    }
  }

  return(
    <div className="ReadingSession">
      {renderReadingSessionContent()}
    </div>
  )
}

export default ReadingSession
