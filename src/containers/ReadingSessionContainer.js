import React from 'react'
import ReadingSessionList from '../components/ReadingSessionList'
import ReadingSession from '../components/ReadingSession'
import ReadingSessionNewForm from '../components/ReadingSessionNewForm'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class ReadingSessionContainer extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path={`/books/:id/reading-sessions`} render={routerProps => <ReadingSessionList {...routerProps} readingSessions={this.props.readingSessions.filter(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
          <Route exact path={`/books/:id/reading-sessions/new`} render={routerProps => <ReadingSessionNewForm {...routerProps} />}/>
          <Route exact path={`/books/:id/reading-sessions/:id`} render={routerProps => <ReadingSession {...routerProps} readingSession={this.props.readingSessions.find(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    readingSessions: state.readingSessions
  }
}

export default connect(mapStateToProps)(ReadingSessionContainer)
