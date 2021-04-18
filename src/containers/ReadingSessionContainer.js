import React from 'react'
import ReadingSessionList from '../components/ReadingSessionList'
import ReadingSession from '../components/ReadingSession'
import ReadingSessionNewForm from '../components/ReadingSessionNewForm'
import ReadingSessionEditForm from '../components/ReadingSessionEditForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { addReadingSession, updateReadingSession } from '../actions/readingSessions'

class ReadingSessionContainer extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path={`/books/:id/reading-sessions`} render={routerProps => <ReadingSessionList {...routerProps} readingSessions={this.props.readingSessions.filter(readingSession => readingSession.book_id === parseInt(routerProps.match.params.id))}/>}/>
          <Route exact path={`/books/:id/reading-sessions/new`} render={routerProps => <ReadingSessionNewForm addReadingSession={this.props.addReadingSession} date={this.props.date} {...routerProps} />}/>
          <Route exact path={`/books/:id/reading-sessions/:id`} render={routerProps => <ReadingSession {...routerProps} readingSession={this.props.readingSessions.find(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
          <Route exact path={`/books/:id/reading-sessions/:id/edit`} render={routerProps => <ReadingSessionEditForm {...routerProps} updateReadingSession={this.props.updateReadingSession} readingSession={this.props.readingSessions.find(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    readingSessions: state.readingSessions,
    date: state.date
  }
}

export default connect(mapStateToProps, { addReadingSession, updateReadingSession })(ReadingSessionContainer)
