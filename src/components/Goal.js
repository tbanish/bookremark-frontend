import React from 'react'
import { Link } from 'react-router-dom'

const Goal = (props) => {
  const renderFinishedBooks = () => {
    return props.books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
  }

  const handleClick = () => {
    const id = props.goals[0].id
    props.deleteGoal(id)
  }

  const renderYearlyGoal = () => {
    const goal = props.goals[0]
    return (
      <>
        <h2>Yearly Reading Goal</h2>
        <p>{goal.attributes.total} books/year</p>
      </>
    )
  }

  const renderBooksRemaining = () => {
    const goal = props.goals[0]
    const remaining = goal.attributes.remaining
    if (remaining > 0) {
      return (
        <>
          <p>Read {remaining} more book(s) to reach your goal for the year.</p>
        </>
      )
    } else {
      return (
        <>
          <p>You have reached your goal for the year!</p>
        </>
      )
    }

  }

  const renderDeleteandEdit = () => {
    const goal = props.goals[0]
    return(
      <>
        <input onClick={() => handleClick()}type="button" value="delete goal"/><br/><br/>
        <Link to={`/goals/${goal.id}/edit`}>Edit Goal</Link>
      </>
    )
  }

  const renderBooksReadThisYear = () => {
    const goal = props.goals[0]
    return (
      <>
        <h3>Books Read This Year</h3>
        <p>You have read {goal.attributes.total - goal.attributes.remaining} book(s) this year.</p>
        {renderFinishedBooks()}
      </>
    )
  }

  const renderGoalContent = () => {
    if (props.goals.length > 0) {
      return (
        <div>
          {renderYearlyGoal()}
          {renderBooksRemaining()}
          {renderDeleteandEdit()}
          {renderBooksReadThisYear()}
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
