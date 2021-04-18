import React from 'react'

class BookEditForm extends React.Component {
  state = {
    title: this.props.book ? this.props.book.attributes.title : '',
    author: this.props.book ? this.props.book.attributes.author : ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const bookId = this.props.book.id
    this.props.updateBook(this.state, bookId)
  }

  render() {

    return(
      <div className="BookNewForm">
        <h1>Edit Book</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <input onChange={this.handleChange}type="text" name="author" value={this.state.author} placeholder="author"/><br/><br/>
          <input type="submit" value="edit book" />
        </form>
      </div>
    )
  }
}

export default BookEditForm
