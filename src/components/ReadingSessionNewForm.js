import React from 'react'
import Timer from './Timer.js'
import uuid from 'uuid'

class ReadingSessionNewForm extends React.Component {
  state = {
    title: '',
    date: this.props.date,
    duration: '',
    noteTitle: '',
    noteContent: '',
    notes: []
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
        book_id: this.props.match.params.id,
        notes: this.state.notes
      }
      this.props.addReadingSession(readingSession)
    }
  }

  handleNoteSubmit = (event) => {
    event.preventDefault()

    if (this.state.noteContent === "" || this.state.noteTitle === "") {
      alert('Make sure you give your note a title and content')
    } else {
      this.setState({
        notes: [...this.state.notes, {id: uuid(), content: this.state.noteContent, title: this.state.noteTitle}]
      })

      this.setState({
        noteTitle: '',
        noteContent: ''
      })
    }
  }

  handleClick = (event) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== event.target.id)
    })

  }

  renderNotes = () => {
    const notes = this.state.notes

    if (notes.length > 0) {
      return notes.map(note =>
        <div key={note.id} onDoubleClick={this.handleDoubleClick}>
          <h4>{note.title}</h4>
          <p id={note.id}>{note.content}</p>
          <input id={note.id} onClick={this.handleClick} type="button" value="delete"/>
        </div>
      )
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
        <h1>New Reading Session</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <Timer setDuration={this.setDuration}/><br/>
          <input type="submit" value="end session"/>
        </form>
        <form onSubmit={this.handleNoteSubmit}><br/><br/>
          <input onChange={this.handleChange} type="text" name="noteTitle" value={this.state.noteTitle} placeholder="give your note a title"/><br/><br/>
          <textarea onChange={this.handleChange} type="text" name="noteContent" rows={15} cols={60} value={this.state.noteContent} placeholder="add some notes here ..."/><br/><br/>
          <input type="submit" value="add note"/>
        </form>
        {this.renderNotes()}
      </div>
    )
  }
}

export default ReadingSessionNewForm
