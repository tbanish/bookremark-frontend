import React from 'react'
import { connect } from 'react-redux'
import { loadBooks } from './actions/books.js'
import { loadGoals } from './actions/goals.js'
import BooksContainer from './containers/BooksContainer.js'
import ReadingSessionContainer from './containers/ReadingSessionContainer.js'
import NavBar from './components/NavBar'
import TodaysDate from './components/TodaysDate'

class App extends React.Component {

  componentDidMount() {
    this.props.loadBooks()
    this.props.loadGoals()
  }
  render() {
    return(
      <div>
        <NavBar />
        <TodaysDate />
        <BooksContainer />
        <ReadingSessionContainer />
      </div>
    )
  }
}

export default connect(null, { loadBooks, loadGoals, })(App);
