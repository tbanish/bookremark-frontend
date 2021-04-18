import React from 'react'
import { Link } from 'react-router-dom'

const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.map(note => <li key={note.id}><Link to={`/books/${props.book.id}/notes/${note.id}`}>{note.title}</Link></li>)
  }
  return(
    <div>
      <h3>Notes</h3>
      {renderNotes()}
    </div>
  )
}

export default NoteList
