import React from 'react'
import Goal from '../components/Goal'
import GoalNewForm from '../components/GoalNewForm'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { addGoal, updateGoal, deleteGoal } from '../actions/goals.js'

class GoalContainer extends React.Component {
  render() {
    return(
      <div className="GoalContainer">
        <Route exact path={'/'} render={routerProps => <Goal {...routerProps} deleteGoal={this.props.deleteGoal} books={this.props.books.filter(book => book.attributes.finished === true)} goals={this.props.goals}/>}/>
        <Route exact path={'/goals/new'} render={routerProps => <GoalNewForm {...routerProps} addGoal={this.props.addGoal} goals={this.props.goals} />}/>
        <Route exact path={'/goals/:id/edit'} render={routerProps => <GoalNewForm {...routerProps} updateGoal={this.props.updateGoal} goals={this.props.goals} />}/>
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

export default connect(mapStateToProps, { addGoal, updateGoal, deleteGoal })(GoalContainer)
