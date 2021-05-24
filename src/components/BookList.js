import React from 'react'
import { Link } from 'react-router-dom'
import '../css/BookList.css'
import { BsBookHalf } from "react-icons/bs";
import { colors } from '../data.js'

const BookList = (props) => {
  const divColor = () => {
    let style = {backgroundColor: ''}
    const color = colors[Math.floor(Math.random() * colors.length)]
    style.backgroundColor = color
    return style
  }

  const renderBooks = () => {
    const books = props.books.filter(book => book.attributes.finished !== true)
    const filteredBooks = props.books.filter(book => book.attributes.title.toLowerCase().includes(props.searchInput))

    if (filteredBooks.length > 0) {
      return filteredBooks.map(book =>
        <div key={book.id} style={divColor()} className="bookCard">
          <Link className="bookLink" to={`/books/${book.id}`}>{book.attributes.title}</Link>
          <p>{book.attributes.author}</p>
        </div>
      )
    }
    if (books.length > 0) {
      return books.map(book =>
        <div key={book.id} style={divColor()} className="bookCard">
          <Link className="bookLink" to={`/books/${book.id}`}>{book.attributes.title}</Link>
          <p>{book.attributes.author}</p>
        </div>
      )
    } else {
      return (
        <div id="emptyBookList">
          <h2>Nothing to read?</h2>
          <p>Click <Link to="/books/new">here</Link> to start adding books to your reading list.</p>
          <BsBookHalf className="BsBookHalf" />
        </div>
      )
    }
  }

  const renderQuote = () => {
    return (
      <p className="quote" id="bookListQuote">
        “Beware of the person of one book.” – Thomas Aquinas
      </p>
    )
  }

  return(
    <div className="BookList">
      <div className="bookListBanner">
        <h1>Reading List</h1>
        {renderQuote()}
      </div>
      <form>
        <input onChange={props.handleChange} type="text" value={props.searchInput} placeholder="search titles in list"/>
      </form>
      <div className="bookListGrid">
        {renderBooks()}
      </div>
    </div>
  )
}

export default BookList
