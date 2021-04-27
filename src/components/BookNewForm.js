import React from 'react'
import '../css/BookNewForm.css'

class BookNewForm extends React.Component {
  state = {
    title: '',
    author: '',
    description: '',
    pageCount: ''
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

  renderOptions = () => {
    let options = []
    for (let i = 0; i < 1000; i++) {
      options.push(<option key={i} value={i}>{i}</option>)
    }
    return options
  }

  render() {
    return(
      <div className="BookNewForm">
        <h1>Add a Book</h1>
        <form onSubmit={this.handleSubmit}>
          <span className="requiredField">*</span><input onChange={this.handleChange}type="text" name="title" value={this.state.title} placeholder="title"/><br/><br/>
          <span className="requiredField">*</span><input onChange={this.handleChange}type="text" name="author" value={this.state.author} placeholder="author"/><br/><br/>
          <label>Page Count: </label>
          <select value={this.state.pageCount} name="pageCount" onChange={this.handleChange}>
            {this.renderOptions()}
          </select><br/><br/>
          <textarea onChange={this.handleChange} type="text" name="description" rows={20} cols={50}value={this.state.description} placeholder="add a book description (optional)"/><br/>
          <input type="submit" value="add book" />
        </form>
      </div>
    )
  }
}

export default BookNewForm
