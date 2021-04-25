import React from 'react'
import { Link } from 'react-router-dom'
import '../css/BookList.css'
import { BsBookHalf } from "react-icons/bs";

const BookList = (props) => {
  const renderBooks = () => {
    const books = props.books.filter(book => book.attributes.finished !== true)
    if (books.length > 0) {
      return books.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.attributes.title}</Link></li>)
    } else {
      return (
        <div>
          <h2>Nothing to read?</h2>
          <p>Click <Link to="/books/new">here</Link> to start adding books to your reading list.</p>
          <BsBookHalf className="BsBookHalf" />
        </div>
      )
    }
  }

  return(
    <div className="BookList">
      <h1>Reading List</h1>
      {renderBooks()}
    </div>
  )
}

export default BookList
