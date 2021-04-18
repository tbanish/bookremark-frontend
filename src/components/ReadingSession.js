import React from 'react'
import { Link } from 'react-router-dom'

const ReadingSession = (props) => {
  const renderLinks = () => {
    return(
      <div>
        <Link to={`/books/${props.match.params.id}/reading-sessions/new`}>New Reading Session</Link><br/>
        <Link to={`/books/${props.readingSession.book_id}/reading-sessions/${props.readingSession.id}/edit`}>Edit Reading Session</Link>
      </div>
    )
  }

  return(
    <div>
      <h1>{props.readingSession && props.readingSession.title}</h1>
      {renderLinks()}<br/><br/>
      <p>Date: {props.readingSession && props.readingSession.date}</p>
      <p>Duration: {props.readingSession && props.readingSession.duration}</p>
    </div>
  )
}

export default ReadingSession
