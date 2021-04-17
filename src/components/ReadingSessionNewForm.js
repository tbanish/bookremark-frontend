import React from 'react'
import Timer from './Timer.js'
import { connect } from 'react-redux'
import { addReadingSession } from '../actions/readingSessions'

class ReadingSessionNewForm extends React.Component {
  state = {
    title: '',
    date: this.props.date,
    duration: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.duration === '') {
      alert('Stop the timer before submitting your session.')
    } else {
      const readingSession = {
        title: this.state.title,
        duration: this.state.duration,
        date: this.props.date,
        book_id: this.props.match.params.id
      }
      this.props.addReadingSession(readingSession)
    }
  }

  setDuration = (time) => {
    let duration;
    if (time.hours === 0 && time.minutes > 0) {
      duration = `${time.minutes} minutes`
    } else if (time.hours > 0 && time.minutes > 0) {
      duration = `${time.hours} hours ${time.minutes} minutes`
    } else if (time.hours > 0 && time.minutes === 0) {
      duration =  `${time.hours} hours`
    } else if (time.hours === 0 && time.minutes === 0) {
      duration = `${time.seconds} seconds`
    }
    this.setState({
      duration: duration
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <Timer setDuration={this.setDuration}/><br/>
          <input type="submit" value="end session"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps, { addReadingSession })(ReadingSessionNewForm)
