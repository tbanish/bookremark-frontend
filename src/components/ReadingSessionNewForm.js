import React from 'react'
import Timer from './Timer.js'
import { connect } from 'react-redux'

class ReadingSessionNewForm extends React.Component {
  state = {
    title: '',
    date: this.props.date,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <Timer /><br/>
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

export default connect(mapStateToProps)(ReadingSessionNewForm)
