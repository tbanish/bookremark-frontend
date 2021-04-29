import React from 'react'
import ReadingSession from '../components/ReadingSession'
import ReadingSessionNewForm from '../components/ReadingSessionNewForm'
import ReadingSessionEditForm from '../components/ReadingSessionEditForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { addReadingSession, updateReadingSession, deleteReadingSession } from '../actions/readingSessions'
import { deleteNote, deleteNotes } from '../actions/notes.js'

class ReadingSessionContainer extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path={`/books/:id/reading-sessions/new`} render={routerProps => <ReadingSessionNewForm book={this.props.books.find(book => book.id === routerProps.match.params.id)} addReadingSession={this.props.addReadingSession} date={this.props.date} {...routerProps} />}/>
          <Route exact path={`/books/:id/reading-sessions/:id`} render={routerProps =>
              <ReadingSession {...routerProps}
                deleteNote={this.props.deleteNote}
                deleteNotes={this.props.deleteNotes}
                books={this.props.books}
                notes={this.props.notes.filter(note => note.readingSessionId === parseInt(routerProps.match.params.id))}
                deleteReadingSession={this.props.deleteReadingSession}
                readingSessions={this.props.readingSessions.filter(readingSession => readingSession.book_id === parseInt(routerProps.match.url.split('/')[2]))}
                readingSession={this.props.readingSessions.find(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
          <Route exact path={`/books/:id/reading-sessions/:id/edit`} render={routerProps => <ReadingSessionEditForm {...routerProps} updateReadingSession={this.props.updateReadingSession} readingSession={this.props.readingSessions.find(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    readingSessions: state.readingSessions,
    date: state.date,
    notes: state.notes,
    books: state.books
  }
}

export default connect(mapStateToProps, { addReadingSession, updateReadingSession, deleteReadingSession, deleteNote, deleteNotes })(ReadingSessionContainer)
