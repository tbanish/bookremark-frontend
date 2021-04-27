import React from 'react'
import { Link } from 'react-router-dom'
import '../css/BookShelf.css'
import { ImBooks } from "react-icons/im";
import {colors} from '../data.js'

const BookShelf = (props) => {
  const divColor = () => {
    let style = {backgroundColor: ''}
    const color = colors[Math.floor(Math.random() * colors.length)]
    style.backgroundColor = color
    return style
  }

  const renderBooks = () => {
    const books = props.books.filter(book => book.attributes.finished === true)
    if (books.length > 0) {
      return books.map(book =>
        <div key={book.id} style={divColor()} className="bookShelfCard">
          <Link className="bookLink" to={`/books/${book.id}`}>{book.attributes.title}</Link>
          <p>{book.attributes.author}</p>
        </div>
      )
    } else {
      return (
        <div id="emptyBookShelf">
          <p id="emptyBookShelfMessage"> When you finish a book it will be stored here on your bookshelf where you can always access past notes and reading sessions.</p>
          <div className="ImBooks"><ImBooks /></div>
        </div>
      )
    }
  }

  const renderQuote = () => {
    return (
      <p className="quote" id="bookShelfQuote">“Once you have read a book you care about, some part of it is always with you.” – Louis L’Amour</p>
    )
  }

  return(
    <div className="BookShelf">
      <div className="bookShelfBanner">
        <h1>Book Shelf</h1>
        {renderQuote()}
      </div>
      <div className="bookShelfGrid">
        {renderBooks()}
      </div>
    </div>
  )
}

export default BookShelf
