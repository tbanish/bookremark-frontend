import React from 'react'
import Goal from '../components/Goal'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class GoalContainer extends React.Component {
  render() {
    return(
      <div>
        <Route exact path={'/'} render={routerProps => <Goal {...routerProps} books={this.props.books.filter(book => book.attributes.finished === true)} goals={this.props.goals}/>}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals,
    books: state.books
  }
}

export default connect(mapStateToProps)(GoalContainer)
