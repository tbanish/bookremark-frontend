import React from 'react'
import { Link } from 'react-router-dom'

const ReadingSession = (props) => {
  const renderLinks = () => {
    return(
      <Link to={`/books/${props.match.params.id}/reading-sessions/new`}>New Reading Session</Link>
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
