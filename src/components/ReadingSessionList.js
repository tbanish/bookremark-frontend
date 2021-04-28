import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ReadingSessionList.css'

const ReadingSessionList = (props) => {
  const renderReadingSessions = () => {
    return props.readingSessions.map(readingSession =>
      <li key={readingSession.id}><Link to={`/books/${readingSession.book_id}/reading-sessions/${readingSession.id}`}>{readingSession.title}</Link></li>)
  }

  return(
    <div className="ReadingSessionList">
      <h3>Reading Sessions</h3>
      {renderReadingSessions()}
    </div>
  )
}

export default ReadingSessionList
