import React from 'react'
import BookList from '../components/BookList'
import BookShelf from '../components/BookShelf'
import Book from '../components/Book'
import BookNewForm from '../components/BookNewForm'
import BookEditForm from '../components/BookEditForm'
import Note from '../components/Note.js'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBook, updateBook, deleteBook } from '../actions/books.js'
import { deleteReadingSessions } from '../actions/readingSessions.js'


class BooksContainer extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/books/reading-list" render={routerProps => <BookList {...routerProps} books={this.props.books}/>}/>
          <Route exact path="/books/bookshelf" render={routerProps => <BookShelf {...routerProps} books={this.props.books}/>}/>
          <Route exact path="/books/new" render={routerProps => <BookNewForm {...routerProps} addBook={this.props.addBook}/>}/>
          <Route exact path="/books/:id" render={routerProps => <Book {...routerProps} notes={this.props.notes.filter(note => note.bookId === routerProps.match.params.id)} deleteBook={this.props.deleteBook} deleteReadingSessions={this.props.deleteReadingSessions} book={this.props.books.find(book => book.id === routerProps.match.params.id)}/>}/>
          <Route exact path="/books/:id/edit" render={routerProps => <BookEditForm {...routerProps} updateBook={this.props.updateBook} book={this.props.books.find(book => book.id === routerProps.match.params.id)}/>}/>
          <Route exact path="/books/:id/notes/:id" render={routerProps => <Note note={this.props.notes.find(note => note.id === parseInt(routerProps.match.params.id))}/>} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addBook, updateBook, deleteBook, deleteReadingSessions })(BooksContainer)
