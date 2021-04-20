import React from 'react'

class GoalNewForm extends React.Component {
  state = {
    goal: this.props.goals.length > 0 ? this.props.goals[0].attributes.total : '1'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderOptions = () => {
    let options = []
    for (let i = 1; i < 999; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  render() {
    return(
      <div>
        <h1>Set Yearly Book Goal</h1>
        <p>How many books would you like to read this year?</p>
        <form>
          <select value={this.state.goal} name="goal" onChange={this.handleChange}>
            {this.renderOptions()}
          </select><br/><br/>
          <input type="submit" value="set goal"/>
        </form>
      </div>
    )
  }
}

export default GoalNewForm
