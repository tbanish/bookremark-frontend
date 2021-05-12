import React from 'react'
import Timer from './Timer.js'
import TodaysDate from './TodaysDate.js'
import uuid from 'uuid'
import '../css/ReadingSessionNewForm.css'

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
    } else if (this.state.title === '') {
      alert('Make sure to give your reading session a title.')
    } else {
      const readingSession = {
        title: this.state.title,
        duration: this.state.duration,
        date: this.props.date,
        book_id: this.props.match.params.id,
        notes: this.state.notes
      }
      this.props.addReadingSession(readingSession)
      this.props.history.push(`/books/${this.props.match.params.id}`)
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
        <div className="sessionNotes" key={note.id} onDoubleClick={this.handleDoubleClick}>
          <h4>{note.title}</h4>
          <p id={note.id}>{note.content}</p>
          <input id={note.id} onClick={this.handleClick} type="button" value="delete"/>
        </div>
      )
    }
  }


  setDuration = (time) => {
    const duration = time.minutes
    this.setState({
      duration: duration
    })
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleNoteSubmit(event)
    }
  }

  renderQuote = () => {
    return (
      <div className="newSessionQuote" id="timerQuotecol2">
        <p>"Reading is an active, imaginative act; it takes work." — Khaled Hosseini</p>
      </div>
    )
  }

  render() {
    return(
      <div className="ReadingSessionNewForm">
        <div id="newReadingSessioncol1">
          <h1>New Reading Session</h1>
          <h3>{this.props.book && this.props.book.attributes.title}</h3>
          <TodaysDate />

          <div className="timerQuoteGrid">
            <div id="timerQuotecol1">
              <Timer setDuration={this.setDuration}/><br/>
              <form id="readingSessionForm" onSubmit={this.handleSubmit}>
                <input id="sessionTitle" onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="session title"/>
                <input id="endSession" type="submit" value="end session"/>
              </form>
            </div>
            {this.renderQuote()}
          </div>
          <form id="noteForm" onSubmit={this.handleNoteSubmit} onKeyDown={this.handleKeyDown} ><br/><br/>
            <input id="noteTitle" onChange={this.handleChange} type="text" name="noteTitle" value={this.state.noteTitle} placeholder="note title"/>
            <input id="addNotebtn" type="submit" value="+"/><br/><br/>
            <textarea onChange={this.handleChange} type="text" name="noteContent" rows={10} cols={70} value={this.state.noteContent}
              placeholder="When you're ready to begin click the play button on the timer to start your session. During your session you can add as many notes as you like.  Simply type your notes into this text area and click the '+' button to submit them. When you are through with your session click the stop button on the timer, give your session a title and click the 'end session' button to submit your work."/>
          </form>
        </div>

        <div id="newReadingSessioncol2">
          <h3>Session Notes:</h3>
          {this.renderNotes()}
      </div>
      </div>
    )
  }
}

export default ReadingSessionNewForm
