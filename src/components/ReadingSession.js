import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/ReadingSession.css'

const ReadingSession = (props) => {
  const renderLinks = () => {
    return(
      <div className="readingSessionNav">
        <div className="sessionMainNav">
        <Link to={`/books/${props.readingSession.book_id}/reading-sessions/new`}>New</Link>
        <Link to={`/books/${props.readingSession.book_id}/reading-sessions/${props.readingSession && props.readingSession.id}/edit`}>Edit</Link>
        <Link to={`/books/${props.readingSession.book_id}`}>Book Page</Link><br/><br/>
        </div>
        <div className="sessionCycle">
          <Link id="previousReadingSession" to={`/books/${props.readingSession.book_id}/reading-sessions/${previousReadingSession()}`}>Last Session</Link>
          <Link id="nextReadingSession" to={`/books/${props.readingSession.book_id}/reading-sessions/${nextReadingSession()}`}>Next Session</Link>
        </div>
      </div>
    )
  }

  const nextReadingSession = () => {
    const first = props.readingSessions[0]
    const current = props.readingSessions.indexOf(props.readingSession)
    const nextInd = current + 1
    const next = props.readingSessions[nextInd]

    if (nextInd > props.readingSessions.length-1) {
      return first.id
    } else {
      return next.id
    }
  }

  const previousReadingSession = () => {
    const lastSession = props.readingSessions[props.readingSessions.length - 1]
    const current = props.readingSessions.indexOf(props.readingSession)
    const previousInd = current - 1
    const previous = props.readingSessions[previousInd]

    if (previousInd < 0) {
      return lastSession.id
    } else {
      return previous.id
    }
  }

  const handleClick = () => {
    props.deleteReadingSession(props.readingSession)
    props.deleteNotes(props.readingSession.id)
    props.history.push(`/books/${props.readingSession.book_id}`)
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
        <input className="sessionDeletebtn" onClick={(event) => handleDeleteNote(event)} id={note.id} type="button" value="delete note"/>
      </div>
    )
  }

  const renderReadingSessionContent = () => {
    if (props.readingSession !== undefined) {
      const book = props.books.find(book => parseInt(book.id) === props.readingSession.book_id)
      return (
        <>
          <div id="readingSessioncol1">
            <h1>{book.attributes.title}</h1>
            <div className="sessionStats">
              <h2>{props.readingSession && props.readingSession.title}</h2>
              <p id="readingSessionDate">Date: {props.readingSession && props.readingSession.date}</p>
              <p id="readingSessionDuration">Duration: {props.readingSession && props.readingSession.duration} minutes</p>
            </div>
            <input className="sessionDeletebtn" onClick={() => handleClick()} type="button" value="delete"/><br/>
            {renderLinks()}
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
