import React from 'react'
import { connect } from 'react-redux'
import { setDate } from '../actions/date.js'

class TodaysDate extends React.Component {
  renderDate() {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const fullDate = new Date()
    const day = fullDate.getDay()
    const date = fullDate.getDate()
    const month = fullDate.getMonth()
    const year = fullDate.getFullYear()
    const fullMonth = months.find(m => months.indexOf(m) === month)
    const fullDay = weekDays.find(d => weekDays.indexOf(d) === day)
    const now = `${fullDay} ${fullMonth} ${date}, ${year}`
    this.props.setDate(now)
    return now
  }

  render() {
    return(
      <div className="TodaysDate">
        <p>{this.renderDate()}</p>
      </div>
    )
  }
}

export default connect(null, { setDate })(TodaysDate)
