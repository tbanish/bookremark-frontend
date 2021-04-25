import React from 'react'
import { Link } from 'react-router-dom'
import '../css/BookShelf.css'
import { ImBooks } from "react-icons/im";

const BookShelf = (props) => {
  const renderBooks = () => {
    const books = props.books.filter(book => book.attributes.finished === true)
    if (books.length > 0) {
      return books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
    } else {
      return (
        <div>
          <p>When you finish a book it will be stored here on your bookshelf where you can always access past notes and reading sessions.</p>
          <div className="ImBooks"><ImBooks /></div>
        </div>
      )
    }
  }

  return(
    <div className="BookShelf">
      <h1>Book Shelf</h1>
      {renderBooks()}
    </div>
  )
}

export default BookShelf
