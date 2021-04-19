import React from 'react'

class BookNewForm extends React.Component {
  state = {
    title: '',
    author: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBook(this.state)
    this.props.history.push('/books/reading-list')
  }

  render() {
    return(
      <div className="BookNewForm">
        <h1>Add a Book</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <input onChange={this.handleChange}type="text" name="author" value={this.state.author} placeholder="author"/><br/><br/>
          <input type="submit" value="add book" />
        </form>
      </div>
    )
  }
}

export default BookNewForm
