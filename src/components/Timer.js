import React from 'react'
import '../css/Timer.css'
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

class Timer extends React.Component {
  state = {
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
    this.props.setDuration(this.state)
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
    } else if (this.state.seconds === 59) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0
      }))
      this.clearTimer()
      this.startTimer()
    }
  }

  render() {
    return(
      <div className="Timer">
        <p>{this.state.minutes} m {this.state.seconds} s</p>
        <div className="timerBtnContainer">
        <button className="timerbtn" id="start" onClick={() => this.startTimer()} type="button"><BsFillPlayFill /></button>
        <button className="timerbtn" id="stop" onClick={() => this.stopTimer()}type="button"><BsFillStopFill/></button>
        <input className="timerbtn" id="reset" onClick={() => this.resetTimer()}type="button" value="reset"/>
        </div>
      </div>
    )
  }
}

export default Timer
