import React from 'react'

const Note = (props) => {
  return(
    <div>
      <h1>{props.note && props.note.title}</h1>
      <p>{props.note && props.note.content}</p>
    </div>
  )
}

export default Note
