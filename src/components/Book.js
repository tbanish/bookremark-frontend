import React from 'react'
import NoteList from './NoteList.js'
import ReadingSessionList from './ReadingSessionList'
import { Link, Redirect } from 'react-router-dom'
import '../css/Book.css'

const Book = (props) => {
  const renderLinks = () => {
    return (
      <div className="bookNavLinks">
        <Link to={`/books/${props.book.id}/reading-sessions/new`}>New Reading Session</Link>
        <Link to={`/books/${props.book.id}/edit`}>Edit Book</Link>
      </div>
    )
  }

  const handleClick = () => {
    const bookId = props.book.id

    if (props.goals.length > 0) {
      const goal = props.goals[0].attributes.total
      const goalId = props.goals[0].id
      props.deleteBook(bookId, goal, goalId)
    } else {
      props.deleteBook(bookId)
    }

    props.deleteReadingSessions(props.book.id)
    for (const readingSession of props.readingSessions) {
      props.deleteNotes(readingSession.id)
    }
    props.history.push('/books/reading-list')
  }

  const handleFinish = () => {
    const bookId = props.book.id

    if (props.goals.length > 0) {
      const goal = props.goals[0].attributes.total
      const goalId = props.goals[0].id
      props.finishBook(bookId, goal, goalId)
    } else {
      props.finishBook(bookId)
    }
    props.history.push("/books/bookshelf")
  }

  const renderButtons = () => {
    if (props.book.attributes.finished !== true) {
      return(
        <div className="bookButtonContainer">
          <input className="bookButtons" onClick={() => handleClick()} type="button" value="delete" />
          <input className="bookButtons" onClick={() => handleFinish()} type="button" value="finish" />
        </div>
      )
    } else {
      return(
        <>
        <p id="finishMark">Finished!</p>
        <div className="bookButtonContainer">
          <input className="bookButtons" onClick={() => handleClick()} type="button" value="delete" />
        </div>
        </>
      )
    }
  }

  const renderBookContent = () => {
    if (props.book !== undefined) {
      return (
        <>
          <div id="bookcol1">
            <NoteList book={props.book} notes={props.notes}/>
          </div>
          <div id="bookcol2">
            <h1 id="bookHeader">{props.book.attributes.title}</h1>
            {renderLinks()}
            <p>By {props.book.attributes.author}</p>
            <p>Page Count: {props.book.attributes.page_count}</p>
            <p>{props.book.attributes.description}</p>
            {renderButtons()}
          </div>
          <div id="bookcol3">
            <ReadingSessionList readingSessions={props.readingSessions}/>
          </div>

        </>
      )
    } else {
      return <Redirect to={'/'}/>
    }
  }

  return(
    <div className="Book">
      {renderBookContent()}
    </div>
  )
}

export default Book
