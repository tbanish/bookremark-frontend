import React from 'react'

class Timer extends React.Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  startTimer = () => {
    this.interval = setInterval(this.increaseTime, 1000)
  }

  clearTimer = () => {
    clearInterval(this.interval)
  }

  stopTimer = () => {
    clearInterval(this.interval)
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }

  increaseTime = () => {
    if (this.state.seconds < 59) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }))
    } else if (this.state.seconds === 59 && this.state.minutes < 59) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0
      }))
      this.clearTimer()
      this.startTimer()
    } else if (this.state.seconds === 59 && this.state.minutes === 59) {
      this.setState(prevState => ({
        hours: prevState.hours + 1,
        minutes: 0,
        seconds: 0
      }))
      this.clearTimer()
      this.startTimer()
    }
  }

  render() {
    return(
      <div>
        <p>{this.state.hours} hours {this.state.minutes} minutes {this.state.seconds} seconds</p>
        <input onClick={() => this.startTimer()} type="button" value="start"/>
        <input onClick={() => this.stopTimer()}type="button" value="stop"/>
        <input onClick={() => this.resetTimer()}type="button" value="reset"/>
      </div>
    )
  }
}

export default Timer
