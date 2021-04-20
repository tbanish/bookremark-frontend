import React from 'react'
import { Link } from 'react-router-dom'

const Goal = (props) => {
  const renderFinishedBooks = () => {
    return props.books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
  }
  return (
    <div>
      <h2>Yearly Reading Goal</h2>
      <p>{props.goals[0] && props.goals[0].attributes.total} books/year</p>
      <p>Read {props.goals[0] && props.goals[0].attributes.remaining} more books to reach your goal for the year.</p>
      <h3>Books Read This Year</h3>
      {renderFinishedBooks()}
    </div>
  )
}

export default Goal
