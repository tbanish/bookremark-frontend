import React from 'react'
import {Redirect} from 'react-router-dom'
import '../css/BookEditForm.css'

class BookEditForm extends React.Component {
  state = {
    title: this.props.book ? this.props.book.attributes.title : '',
    author: this.props.book ? this.props.book.attributes.author : '',
    description: this.props.book ? this.props.book.attributes.description : '',
    pageCount: this.props.book ? this.props.book.attributes.page_count : ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.title === '' || this.state.author === '') {
      alert('Make sure to give your book a title and author.')
    } else {
      const bookId = this.props.book.id
      this.props.updateBook(this.state, bookId)
      this.props.history.push(`/books/${this.props.match.params.id}`)
    }
  }

  renderOptions = () => {
    let options = []
    for (let i = 0; i < 1000; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  renderContent = () => {

    if (this.props.book) {
      return (
        <>
          <h1>Edit Book</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="bookEditInputs" id="editTitle" onChange={this.handleChange}type="text" name="title" value={this.state.title} placeholder="title"/>
            <input className="bookEditInputs" id="editAuthor" onChange={this.handleChange}type="text" name="author" value={this.state.author} placeholder="author"/><br/><br/>
              <label>Page Count: </label>
              <select value={this.state.pageCount} name="pageCount" onChange={this.handleChange}>
                {this.renderOptions()}
              </select><br/><br/>
            <textarea className="bookEditInputs" id="editDescription" onChange={this.handleChange} type="text" name="description" rows={15} cols={75} value={this.state.description} placeholder="add a book description (optional)"/><br/>
            <input id="bookEditbtn"type="submit" value="edit book" />
          </form>
        </>
      )
    } else {
      return <Redirect to="/"/>
    }
  }

  render() {

    return(
      <div className="BookEditForm">
        {this.renderContent()}
      </div>
    )
  }
}

export default BookEditForm
