import React from 'react'
import NoteList from './NoteList.js'
import { Link, Redirect } from 'react-router-dom'
import '../css/Book.css'

const Book = (props) => {
  const renderLinks = () => {
    return (
      <div>
        <h3>Links</h3>
        <Link to={`/books/${props.book && props.book.id}/reading-sessions/new`}>New Reading Session</Link><br/><br/>
        <Link to={`/books/${props.book && props.book.id}/reading-sessions`}>Reading Sessions</Link><br/><br/>
        <Link to={`/books/${props.book && props.book.id}/edit`}>Edit Book</Link>
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
    if (props.book && props.book.attributes.finished !== true) {
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
            <h1>{props.book && props.book.attributes.title}</h1>
            <p>By {props.book && props.book.attributes.author}</p>
            <p>Page Count: {props.book && props.book.attributes.page_count}</p>
            <p>{props.book && props.book.attributes.description}</p>
            {renderButtons()}
          </div>
          <div id="bookcol3">
            {renderLinks()}
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
