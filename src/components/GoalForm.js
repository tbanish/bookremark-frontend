import React from 'react'
import '../css/GoalForm.css'

class GoalForm extends React.Component {
  state = {
    goal: this.props.goals.length > 0 ? this.props.goals[0].attributes.total : '1'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.props.addGoal) {
      this.props.addGoal(this.state.goal)
    } else {
      const id = this.props.goals[0].id
      this.props.updateGoal(this.state.goal, id)
    }
    this.props.history.push('/goals')
  }

  renderOptions = () => {
    let options = []
    for (let i = 1; i < 1000; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  render() {
    return(
      <div className="GoalForm">
        <h1>Set Yearly Book Goal</h1>
        <p>How many books would you like to read this year?</p>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.goal} name="goal" onChange={this.handleChange}>
            {this.renderOptions()}
          </select><br/><br/>
        <input id="goalbtn" type="submit" value="set goal"/>
        </form>
      </div>
    )
  }
}

export default GoalForm
