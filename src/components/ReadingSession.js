import React from 'react'

const ReadingSession = (props) => {
  return(
    <div>
      <h1>{props.readingSession && props.readingSession.title}</h1>
      <p>Date: {props.readingSession && props.readingSession.date}</p>
      <p>Duration: {props.readingSession && props.readingSession.duration}</p>
    </div>
  )
}

export default ReadingSession
