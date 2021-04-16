import React from 'react'
import { Link } from 'react-router-dom'

const BookList = (props) => {
  const renderBooks = () => {
    const books = props.books.filter(book => book.attributes.finished !== true)
    return books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
  }
  
  return(
    <div>
      {renderBooks()}
    </div>
  )
}

export default BookList
