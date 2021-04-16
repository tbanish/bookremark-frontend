import React from 'react'
import { connect } from 'react-redux'
import { loadBooks } from './actions/books.js'
import BooksContainer from './containers/BooksContainer.js'

class App extends React.Component {

  componentDidMount() {
    this.props.loadBooks()
  }
  render() {
    return(
      <div>
        <BooksContainer />
      </div>
    )
  }
}

export default connect(null, {loadBooks})(App);
