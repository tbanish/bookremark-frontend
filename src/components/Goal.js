import React from 'react'
import { Link } from 'react-router-dom'

const Goal = (props) => {
  const renderFinishedBooks = () => {
    return props.books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
  }

  const renderGoalContent = () => {
    if (props.goals.length > 0) {
      const goal = props.goals[0]
      return (
        <div>
          <h2>Yearly Reading Goal</h2>
          <p>{goal.attributes.total} books/year</p>
          <p>Read {goal.attributes.remaining} more books to reach your goal for the year.</p>

          <Link to={`/goals/${goal.id}/edit`}>Edit Goal</Link>

          <h3>Books Read This Year</h3>
          <p>You have read {goal.attributes.total - goal.attributes.remaining} book(s) this year.</p>
          {renderFinishedBooks()}
        </div>
      )
      } else {
        return (
          <div>
            <h2>Yearly Reading Goal</h2>
            <p>Start your reading habit by setting your yearly goal.</p>
            <Link to={`/goals/new`}>Set Goal</Link>
          </div>
        )
      }
    }

  return (
    <div>
      {renderGoalContent()}
    </div>
  )
}

export default Goal
