import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Goal.css'
import { GiStairsGoal } from "react-icons/gi";

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
        <p id="goalTotal">{goal.attributes.total} books/year</p>
      </>
    )
  }

  const renderBooksRemaining = () => {
    const goal = props.goals[0]
    const remaining = goal.attributes.remaining
    if (remaining > 0) {
      return (
        <>
          <p id="booksRemaining" >Read {remaining} more book(s) to reach your goal for the year.</p>
        </>
      )
    } else {
      return (
        <>
          <p id="goalReached">You have reached your goal for the year!</p>
        </>
      )
    }

  }

  const renderDeleteandEdit = () => {
    const goal = props.goals[0]
    return(
      <>
        <input id="deleteGoalbtn" onClick={() => handleClick()}type="button" value="Delete Goal"/><br/><br/>
        <Link to={`/goals/${goal.id}/edit`}>Edit Goal</Link>
      </>
    )
  }

  const renderBooksReadThisYear = () => {
    const goal = props.goals[0]
    return (
      <div>
        <h3>Books Read This Year</h3>
        <p>You have read {goal.attributes.total - goal.attributes.remaining} book(s) this year.</p>
        {renderFinishedBooks()}
      </div>
    )
  }

  const renderQuote = () => {
    return (
      <div className="quote" id="goalQuote">
      <p>“It is good to have an end to journey toward; but it is the journey that matters, in the end.”</p>
      <p>― Ursula K. Le Guin, The Left Hand of Darkness</p>
      </div>
    )
  }

  const renderGoalContent = () => {
    if (props.goals.length > 0) {
      return (
        <>
        <div className="goalContentcol" id="goalContentcol1">
          {renderBooksReadThisYear()}
        </div>
        <div className="goalContentcol" id="goalContentcol2">
            <h2>Yearly Reading Goal</h2>
            <div className="col2Body">
              {renderYearlyGoal()}
              {renderBooksRemaining()}
              {renderDeleteandEdit()}
              {renderQuote()}
            </div>
        </div>
        </>
      )
      } else {
        return (
          <div className="setGoal">
            <h2>Yearly Reading Goal</h2>
            <p>Start your reading habit by setting your yearly goal.</p>
            <Link to={`/goals/new`}>Set Goal</Link>
            <div className="GiStairsGoal">
              <GiStairsGoal />
            </div>
          </div>
        )
      }
    }

  return (
    <div className="Goal">
      {renderGoalContent()}
    </div>
  )
}

export default Goal
