import React from 'react'
import BookList from '../components/BookList'
import BookShelf from '../components/BookShelf'
import Book from '../components/Book'
import BookNewForm from '../components/BookNewForm'
import BookEditForm from '../components/BookEditForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBook } from '../actions/books.js'

class BooksContainer extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/books/reading-list" render={routerProps => <BookList {...routerProps} books={this.props.books}/>}/>
          <Route exact path="/books/bookshelf" render={routerProps => <BookShelf {...routerProps} books={this.props.books}/>}/>
          <Route exact path="/books/new" render={routerProps => <BookNewForm {...routerProps} addBook={this.props.addBook}/>}/>
          <Route exact path="/books/:id" render={routerProps => <Book {...routerProps} book={this.props.books.find(book => book.id === routerProps.match.params.id)}/>}/>
          <Route exact path="/books/:id/edit" render={routerProps => <BookEditForm {...routerProps} book={this.props.books.find(book => book.id === routerProps.match.params.id)}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { addBook })(BooksContainer)
