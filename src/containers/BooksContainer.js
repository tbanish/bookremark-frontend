import React from 'react'
import BookList from '../components/BookList'
import {Route} from 'react-router-dom'

class BooksContainer extends React.Component {
  render() {
    return(
      <div>
        <Route path="/books/reading-list" render={routerProps => <BookList {...routerProps}/>}/>
      </div>
    )
  }
}

export default BooksContainer
