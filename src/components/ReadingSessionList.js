import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ReadingSessionList.css'

const ReadingSessionList = (props) => {
  const renderReadingSessions = () => {
    return props.readingSessions.map(readingSession => <li key={readingSession.id}><Link to={`/books/${readingSession.book_id}/reading-sessions/${readingSession.id}`}>{readingSession.title}</Link></li>)
  }

  const renderLinks = () => {
    return(
      <Link to={`/books/${props.match.params.id}/reading-sessions/new`}>New Reading Session</Link>
    )
  }

  return(
    <div className="ReadingSessionList">
      <h1>Reading Sessions</h1>
      {renderLinks()}<br/><br/>
      {renderReadingSessions()}
    </div>
  )
}

export default ReadingSessionList
