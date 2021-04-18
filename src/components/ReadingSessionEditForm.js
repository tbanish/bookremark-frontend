import React from 'react'
import { connect } from 'react-redux'

class ReadingSessionEditForm extends React.Component {
  state = {
    title: this.props.readingSession ? this.props.readingSession.title : '',
    date: this.props.date,
    duration: this.props.readingSession ? this.props.readingSession.duration : ''
  }

  render() {
    return(
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  }
}

export default connect(mapStateToProps)(ReadingSessionEditForm)
