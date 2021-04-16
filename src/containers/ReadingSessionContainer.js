import React from 'react'
import ReadingSessionList from '../components/ReadingSessionList'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class ReadingSessionContainer extends React.Component {
  render() {
    return(
      <div>
        <Route exact path={`/books/:id/reading-sessions`} render={routerProps => <ReadingSessionList {...routerProps} readingSessions={this.props.readingSessions.filter(readingSession => readingSession.id === parseInt(routerProps.match.params.id))}/>}/>
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
