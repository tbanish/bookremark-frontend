import React from 'react'
import { Link } from 'react-router-dom'

const ReadingSessionList = (props) => {
  const renderReadingSessions = () => {
    return props.readingSessions.map(readingSession => <li key={readingSession.id}><Link to={`/books/${readingSession.book_id}/reading-sessions/${readingSession.id}`}>{readingSession.title}</Link></li>)
  }

  return(
    <div>
      <h1>Reading Sessions</h1>
      {renderReadingSessions()}
    </div>
  )
}

export default ReadingSessionList
