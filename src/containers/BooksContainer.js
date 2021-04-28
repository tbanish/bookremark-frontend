import React from 'react'
import BookList from '../components/BookList'
import BookShelf from '../components/BookShelf'
import Book from '../components/Book'
import BookNewForm from '../components/BookNewForm'
import BookEditForm from '../components/BookEditForm'
import Note from '../components/Note.js'
import NoteEditForm from '../components/NoteEditForm.js'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBook, updateBook, deleteBook, finishBook } from '../actions/books.js'
import { deleteReadingSessions } from '../actions/readingSessions.js'
import { updateNote, deleteNote, deleteNotes } from '../actions/notes.js'


class BooksContainer extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/books/reading-list" render={routerProps => <BookList {...routerProps} books={this.props.books}/>}/>
          <Route exact path="/books/bookshelf" render={routerProps => <BookShelf {...routerProps} books={this.props.books}/>}/>
          <Route exact path="/books/new" render={routerProps => <BookNewForm {...routerProps} addBook={this.props.addBook}/>}/>
          <Route exact path="/books/:id" render={routerProps =>
              <Book {...routerProps}
                finishBook={this.props.finishBook}
                readingSessions={this.props.readingSessions.filter(readingSession => readingSession.book_id === parseInt(routerProps.match.params.id))}
                deleteNotes={this.props.deleteNotes}
                notes={this.props.notes.filter(note => note.bookId === routerProps.match.params.id)}
                deleteBook={this.props.deleteBook}
                goals={this.props.goals}
                deleteReadingSessions={this.props.deleteReadingSessions}
                book={this.props.books.find(book => book.id === routerProps.match.params.id)}/>}/>
          <Route exact path="/books/:id/edit" render={routerProps => <BookEditForm {...routerProps} updateBook={this.props.updateBook} book={this.props.books.find(book => book.id === routerProps.match.params.id)}/>}/>
          <Route exact path="/books/:id/notes/:id" render={routerProps => <Note {...routerProps} book={this.props.books.find(book => book.id === routerProps.match.url.split("/")[2])} deleteNote={this.props.deleteNote} notes={this.props.notes.filter(note => note.bookId === routerProps.match.url.split("/")[2])} note={this.props.notes.find(note => note.id === parseInt(routerProps.match.params.id))}/>} />
          <Route exact path="/books/:id/notes/:id/edit" render={routerProps => <NoteEditForm {...routerProps} updateNote={this.props.updateNote} note={this.props.notes.find(note => note.id === parseInt(routerProps.match.params.id))}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    notes: state.notes,
    readingSessions: state.readingSessions,
    goals: state.goals
  }
}

export default connect(mapStateToProps, { addBook, updateBook, deleteBook, deleteReadingSessions, updateNote, deleteNote, deleteNotes, finishBook })(BooksContainer)
