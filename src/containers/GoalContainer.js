import React from 'react'
import Goal from '../components/Goal'
import GoalForm from '../components/GoalForm'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { addGoal, updateGoal, deleteGoal } from '../actions/goals.js'
import '../css/GoalContainer.css'

class GoalContainer extends React.Component {
  render() {
    return(
      <div className="GoalContainer">
        <Route exact path={'/goals'} render={routerProps => <Goal {...routerProps} deleteGoal={this.props.deleteGoal} books={this.props.books.filter(book => book.attributes.finished === true)} goals={this.props.goals}/>}/>
        <Route exact path={'/goals/new'} render={routerProps => <GoalForm {...routerProps} addGoal={this.props.addGoal} goals={this.props.goals} />}/>
        <Route exact path={'/goals/:id/edit'} render={routerProps => <GoalForm {...routerProps} updateGoal={this.props.updateGoal} goals={this.props.goals} />}/>
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
