import React from 'react'
import { Link } from 'react-router-dom'

const BookList = (props) => {
  const renderBooks = () => {
    const books = props.books.filter(book => book.attributes.finished !== true)
    return books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
  }

  return(
    <div>
      <h1>Reading List</h1>
      {renderBooks()}
    </div>
  )
}

export default BookList
