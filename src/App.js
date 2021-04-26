import React from 'react'
import { connect } from 'react-redux'
import { loadBooks } from './actions/books.js'
import { loadGoals } from './actions/goals.js'
import BooksContainer from './containers/BooksContainer.js'
import ReadingSessionContainer from './containers/ReadingSessionContainer.js'
import NavBar from './components/NavBar'
import GoalContainer from './containers/GoalContainer'
import NoMatch from './components/NoMatch.js'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

class App extends React.Component {

  componentDidMount() {
    this.props.loadBooks()
    this.props.loadGoals()
  }
  render() {
    return(
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={routerProps => <Home {...routerProps}/>}/>
          <Route exact path={["/books/reading-list", "/books/bookshelf", "/books/new", "/books/:id", "/books/:id/edit", "/books/:id/notes/:id", "/books/:id/notes/:id/edit"]} ><BooksContainer /></Route>
          <Route exact path={[`/books/:id/reading-sessions`, `/books/:id/reading-sessions/new`, `/books/:id/reading-sessions/:id`, `/books/:id/reading-sessions/:id/edit`]} ><ReadingSessionContainer /></Route>
          <Route exact path={['/goals', '/goals/new', '/goals/:id/edit']} ><GoalContainer /></Route>
          <Route exact path="*" component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null, { loadBooks, loadGoals, })(App);
