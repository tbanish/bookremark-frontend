import React from 'react'
import {Redirect} from 'react-router-dom'
import '../css/NoteEditForm.css'

class NoteEditForm extends React.Component {
  state = {
    title: this.props.note ? this.props.note.title : '',
    content: this.props.note ? this.props.note.content : ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const updatedNote = {
      title: this.state.title,
      content: this.state.content,
      id: this.props.note.id,
    }

    this.props.updateNote(updatedNote, this.props.note.bookId)
    this.props.history.push(`/books/${this.props.note.bookId}/notes/${this.props.note.id}`)
  }

  renderContent = () => {
    if (this.props.note) {
      return (
        <>
        <h1>Edit Note</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <textarea onChange={this.handleChange} type="text" name="content" value={this.state.content} rows={15} cols={60} placeholder="content"/><br/><br/>
          <input type="submit" name="submit" value="edit note"/>
        </form>
        </>
      )
    } else {
      return <Redirect to="/"/>
    }
  }

  render() {
    return(
      <div className="NoteEditForm">
        {this.renderContent()}
      </div>
    )
  }
}

export default NoteEditForm
